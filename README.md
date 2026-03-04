# Tienda Reservas

Tienda en línea con sistema de reservas desarrollada con Next.js y Strapi.

## Requisitos

- Node.js >= 20.x
- npm >= 10.x

## Estructura del proyecto

```
tienda-reservas/
├── app/                    # Frontend Next.js (App Router)
│   ├── components/         # Componentes React
│   │   ├── product/       # Componentes de productos
│   │   └── store/         # Estado global (Zustand)
│   ├── shop/              # Página del carrito
│   └── types/             # Tipos TypeScript
├── backend/               # Backend Strapi
│   └── src/
│       ├── api/           # API de Strapi
│       └── extensions/    # Extensiones del panel
└── package.json
```

## Instalación

### 1. Clonar el proyecto

```bash
git clone <repositorio>
cd tienda-reservas
```

### 2. Instalar dependencias del frontend

```bash
npm install
```

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y configúralo:

```bash
cp .env.example .env
```

Edita `.env` con tu configuración:

```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
```

### 4. Instalar y configurar el backend (Strapi)

```bash
cd backend
cp .env.example .env
npm install
```

Edita `.env` con tus claves:

```env
HOST=0.0.0.0
PORT=1337
APP_KEYS="clave1,clave2"
JWT_SECRET=tu_secreto
```

Inicia el backend:

```bash
npm run develop
```

El panel de Strapi estará en: http://localhost:1337/admin

### 5. Configurar datos en Strapi

1. Crea un tipo de colección llamado `Product` con los campos:
   - `name` (Text)
   - `description` (Rich Text)
   - `price` (Number)
   - `image` (Media)

2. Añade algunos productos de prueba

## Ejecución

### Desarrollo (ambos servidores)

```bash
# Terminal 1 - Backend
cd backend
npm run develop

# Terminal 2 - Frontend
npm run dev
```

- Frontend: http://localhost:3000
- Backend: http://localhost:1337

### Producción

```bash
# Build frontend
npm run build
npm start

# Build backend
cd backend
npm run build
npm start
```

## Scripts disponibles

### Frontend
| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera build de producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run lint` | Ejecuta el linter |

### Backend
| Comando | Descripción |
|---------|-------------|
| `npm run develop` | Inicia el servidor en desarrollo |
| `npm run build` | Genera build de producción |
| `npm run start` | Inicia el servidor de producción |

## Tecnologías

- **Frontend**: Next.js 16, React 19, Tailwind CSS 4, Zustand
- **Backend**: Strapi 5, SQLite
- **Tipado**: TypeScript

## Características

- Catálogo de productos desde Strapi
- Carrito de compras con persistencia local
- Diseño responsive con Tailwind CSS
- Estilo de ticket de compra
