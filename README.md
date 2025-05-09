# API de Flights & Passengers

API RESTful hecha con **TypeScript**, **Express**, **MongoDB**, y **Docker**, con endpoints para gestionar los vuelos y pasajeros.


## 🛠️ Setup

### 1️⃣ Clonar repositorio

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Crear .env
Example:
```bash
PORT=3000
MONGO_URI=mongodb://localhost:27017/flightsdb
```

### 4️⃣ Correr localmente (development)
```bash
npm run dev
Uses ts-node-dev for hot reload.
```

### 5️⃣ Build  (production)
```bash
npm run build
npm start
```
### 6️⃣ Correr con Docker
```bash
docker-compose up --build
Ensure your .env is correctly set for Docker MongoDB.
```

## 📜 Documentación 

https://documenter.getpostman.com/view/28263979/2sB2j97U3A