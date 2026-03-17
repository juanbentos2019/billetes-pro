# ANEXO TÉCNICO: Especificaciones de Arquitectura y Escalabilidad
**Proyecto:** Billetes-Pro 360  
**Perfil del Responsable:** Chief Technology Officer (CTO)

---

## PARTE I: ESTADO ACTUAL DE LA PLATAFORMA (MVP OPERATIVO)

La arquitectura actual de **Billetes-Pro 360** ya se encuentra cimentada sobre un stack moderno y productivo, demostrando tracción tecnológica real y sentando las bases estructurales para escalar rápidamente hacia un ecosistema global.

### 1. Arquitectura de Software: Rendimiento y Alta Disponibilidad
*   **Web Framework (Next.js - App Router & TypeScript):** El proyecto ya opera bajo un modelo híbrido de renderizado. Las vistas de catálogo público utilizan *Static Site Generation* (SSG), asegurando tiempos de carga en milisegundos servidos por CDN. La capa administrativa utiliza *Server-Side Rendering* (SSR) para garantizar la inmersión de datos en tiempo real. La adopción total de TypeScript actúa como un anillo de seguridad en etapa de compilación.
*   **Motor Visual y Geoespacial:** Se implementó interactividad avanzada acelerada por hardware (3D Flip en los billetes) utilizando **Framer Motion**, delegando el esfuerzo de pintado a la GPU del cliente. Además, el sistema ya cuenta con cartografía vectorial interactiva basada en **Leaflet.js** para la geolocalización fluida de los países.
*   **Backend y Persistencia (Supabase, PostgreSQL & Prisma ORM):** El núcleo transaccional está operativo en Supabase (motor PostgreSQL). El *schema* relacional y sus migraciones son manejadas íntegramente a través de **Prisma ORM**, lo que nos garantiza integridad referencial estricta y previene inconsistencias de tipos a nivel de base de datos.

### 2. Seguridad y Gestión de Roles SaaS
*   **Jerarquía de Accesos Estricta:** La base de datos soporta nativamente la división en capas corporativas a través de roles definidos (ej. `SUPER_MASTER`, `AGENCIA`, `CAJERO`).
*   **Seguridad a Nivel de Fila (RLS):** Emparejado con Supabase Auth, el sistema utiliza perfiles vinculados que filtran el acceso a los datos in situ. Las operaciones de lectura/escritura (CRUD) están securizadas para que una franquicia solo interactúe con el portafolio de su jurisdicción (Multi-tenant isolation).

### 3. Módulo de Seguridad Fiduciaria Funcional (Fase 1)
*   **Verificación Rígida Dinámica:** Hemos desplegado la versión v1.0 del catálogo de seguridad. El administrador puede inyectar "Bloques de Verificación" detallados en versiones específicas de billetes. La arquitectura almacena *arrays* nativos formateados en JSON en Postgres, lo que genera proyecciones *front-end* interactivas de las firmas de seguridad, habilitando a los cajeros un escrutinio visual al instante.

---

## PARTE II: ROADMAP DE VALIDACIÓN COMERCIAL (FONDOS VIM - ANII)

La inyección del fondo de Validación de Innovación y Mercado (VIM) de **$ 200.000 UYU** es el vector estratégico requerido para demostrar la viabilidad comercial y transformar este MVP operativo en un producto SaaS empaquetado y listo para sus primeras ventas B2B. Al tratarse de un fondo de validación temprana, el capital apalancará hitos precisos orientados a conseguir y sostener a los "early adopters" (primeras casas de cambio):

### 1. Despliegue de Pasarela de Pagos (SaaS B2B)
El fondo permitirá financiar las horas de ingeniería necesarias para conectar nuestra arquitectura base con ecosistemas de cobro profesionales, vital para la validación del modelo de negocios:
*   **Orquestación Transaccional:** Integración de la lógica interna con infraestructuras transaccionales seguras (Stripe / MercadoPago) para el cobro recurrente de licencias.
*   **Aprovisionamiento Automatizado (Webhook-Driven):** Sustituir el alta manual de clientes por un flujo automatizado donde PostgreSQL escuche *Webhooks* de la pasarela y genere dinámicamente el *tenant* comercial, validando técnicamente que la plataforma puede operar y cobrar en piloto automático.

### 2. Infraestructura y *Testing* Comercial
Validar el producto en puntos de venta físicos exige garantizar tolerancia a fallos y velocidad real en las cajas registradoras de los primeros clientes:
*   **Costos Operativos Nivel "Pro":** Cobertura de la facturación en la nube (Vercel, Supabase Pro y servicios perimetrales como bases de datos Edge) para asegurar que, durante la fase de prueba, la infraestructura retorne tiempos de latencia menores a 200ms a los primeros usuarios sin caer bajo umbrales gratuitos limitados.
*   **Orquestación de Convergencia Cambiaria Básica:** Implementar *Edge Functions* que consuman apis de tipo de cambio de forma periódica (`stale-while-revalidate`), entregando FX hiper-actualizado a las sucursales sin sobrecargar componentes del cliente final.

### 3. Poblado Semilla de la "Fuente de Verdad" (Datos Forenses)
El MVP tiene la capacidad técnica, pero requiere inyección de datos para tener valor comercial ante los primeros "early adopters":
*   **Levantamiento Forense Fase 1:** Subsidiar la ingeniería de datos requerida para mapear las divisas más traficadas del cono sur (USD, EUR, BRL, ARS, GBP). Esto implica cargar manual y vectorialmente la reactividad Ultravioleta (UV), infrarroja (IR) y tintas variables (OVI) de cada billete en nuestros esquemas JSONB multidimensionales.
*   **Soporte de Auditoría Básica:** Pruebas de fuego en locales comerciales para iterar el UI/UX basándonos en la experiencia en el terreno de cajeros reales, asegurando que la herramienta disminuye fácticamente el tiempo de detección de falsificaciones en el mostrador.

---
*Documento elaborado técnica y arquitectónicamente por la Jefatura Tecnológica (CTO).*  
*Diseñado explícitamente para responder a los criterios de Validación Técnica y Comercial del instrumento VIM de la Agencia Nacional de Investigación e Innovación (ANII).*
