import prisma from '../lib/prisma';

async function runTests() {
    console.log("Iniciando pruebas...");
    const results = {
        falla1_cascade: "PENDIENTE",
        falla3_race_condition: "PENDIENTE"
    };

    try {
        // --- TEST FALLA 1: Cascade Delete ---
        const testEmpresa = await prisma.empresa.create({
            data: { nombre: "Test Falla 1 Empresa", maxCajeros: 1 }
        });
        const testUser = await prisma.user.create({
            data: { 
                email: `test_falla1_${Date.now()}@test.com`, 
                password: "123", 
                empresaId: testEmpresa.id 
            }
        });
        const testTicket = await prisma.ticket.create({
            data: {
                asunto: "Test",
                mensaje: "Test",
                autorId: testUser.id,
                empresaId: testEmpresa.id
            }
        });

        // Intentar eliminar la empresa, debería borrar en cascada y NO lanzar error 500
        await prisma.empresa.delete({ where: { id: testEmpresa.id } });
        
        // Verificar
        const checkUser = await prisma.user.findUnique({ where: { id: testUser.id } });
        const checkTicket = await prisma.ticket.findUnique({ where: { id: testTicket.id } });

        if (!checkUser && !checkTicket) {
            results.falla1_cascade = "EXITO: La eliminación en cascada funcionó correctamente sin errores.";
        } else {
            results.falla1_cascade = `FALLO: Los registros hijos no se eliminaron. User=${!!checkUser}, Ticket=${!!checkTicket}`;
        }

        // --- TEST FALLA 3: Race Condition ---
        const raceUser = await prisma.user.create({
            data: { email: `race_test_${Date.now()}@test.com`, password: "123", failedLoginAttempts: 0 }
        });

        // Simular 20 intentos paralelos en el mismo milisegundo
        const promises = [];
        for(let i=0; i<20; i++) {
            promises.push(
                prisma.user.update({
                    where: { id: raceUser.id },
                    data: { failedLoginAttempts: { increment: 1 } }
                })
            );
        }
        await Promise.all(promises);

        const raceUserAfter = await prisma.user.findUnique({ where: { id: raceUser.id } });
        if (raceUserAfter?.failedLoginAttempts === 20) {
             results.falla3_race_condition = "EXITO: Incremento atómico perfecto. " + raceUserAfter.failedLoginAttempts + "/20 fallos registrados.";
        } else {
             results.falla3_race_condition = `FALLO: Se perdieron incrementos. Registrados: ${raceUserAfter?.failedLoginAttempts}/20`;
        }

        // Cleanup
        await prisma.user.delete({ where: { id: raceUser.id } });

        console.log("\nRESULTADOS FINALES:");
        console.log(JSON.stringify(results, null, 2));
        process.exit(0);
    } catch(err: any) {
        console.error("ERROR DURANTE LA EJECUCIÓN DEL TEST:");
        console.error(err.message);
        process.exit(1);
    }
}

runTests();
