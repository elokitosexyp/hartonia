# Harton - Soluciones Digitales

Aplicación web full stack para una empresa de servicios tecnológicos.

## Stack Tecnológico

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS, Lucide React
- **Backend**: Next.js API Routes con tRPC
- **Base de Datos**: PostgreSQL con Prisma ORM

## Estructura de Carpetas

```
harton/
├── app/                    # Aplicación Next.js (App Router)
│   ├── api/trpc/[trpc]/   # Ruta tRPC
│   ├── admin/             # Panel administrativo
│   ├── contacto/          # Página de contacto
│   ├── proyectos/         # Página de proyectos
│   ├── servicios/         # Página de servicios
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página de inicio
│   ├── providers.tsx      # Providers de tRPC y React Query
│   └── globals.css        # Estilos globales
├── components/            # Componentes React
├── lib/                   # Utilidades y clientes
├── prisma/                # Esquema de Prisma
└── server/                # Código del servidor tRPC
```

## Instalación y Desarrollo Local

1. **Clona el repositorio**
2. **Instala dependencias**: `npm install`
3. **Configura la base de datos**:
   - Crea una base de datos PostgreSQL
   - Actualiza la variable `DATABASE_URL` en el archivo `.env`
4. **Genera el cliente de Prisma**: `npm run db:generate`
5. **Aplica migraciones (o push)**: `npm run db:push`
6. **Inicia el servidor de desarrollo**: `npm run dev`
7. **Abre la aplicación**: http://localhost:3000

## Despliegue en Render

### Paso 1: Crea una cuenta en Render

Si no tienes una cuenta, registrate en [Render.com](https://render.com)

### Paso 2: Crea una base de datos PostgreSQL en Render

1. Ve a tu dashboard de Render
2. Haz clic en **"New +"** > **"PostgreSQL"**
3. Llena los detalles de tu base de datos
4. Crea la base de datos y copia la **Internal Database URL**

### Paso 3: Despliega la aplicación web

1. Ve a tu dashboard de Render
2. Haz clic en **"New +"** > **"Web Service"**
3. Conecta tu repositorio de GitHub
4. Configura el servicio:
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Agrega la variable de entorno:
   - `DATABASE_URL`: pega la Internal Database URL de tu PostgreSQL (asegúrate de que termine con `?schema=public`)
6. Haz clic en **"Create Web Service"**

### Paso 4: Aplica migraciones en Render

Render ejecutará automáticamente `prisma generate` gracias al script `postinstall`. Para crear las tablas en la base de datos de producción:

1. En Render, ve a tu servicio web > **Shell**
2. Ejecuta: `npx prisma db push`

## Funcionalidades

- **Inicio**: Muestra servicios y proyectos destacados
- **Servicios**: Lista de todos los servicios ofrecidos
- **Proyectos**: Lista de proyectos realizados
- **Contacto**: Formulario para enviar mensajes
- **Admin**: Panel administrativo para gestionar servicios, proyectos y mensajes (sin autenticación)
