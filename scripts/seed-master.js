const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
    const hashedPassword = await bcrypt.hash('Master123!', 10);

    const superMaster = await prisma.user.upsert({
        where: { email: 'admin@billetesSaaS.com' },
        update: {},
        create: {
            email: 'admin@billetesSaaS.com',
            password: hashedPassword,
            nombre: 'Juan B',
            role: 'SUPER_MASTER',
        },
    });

    console.log('--- USUARIO MASTER CREADO ---');
    console.log('Email:', superMaster.email);
    console.log('Password: Master123!');
    console.log('Rol:', superMaster.role);
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
