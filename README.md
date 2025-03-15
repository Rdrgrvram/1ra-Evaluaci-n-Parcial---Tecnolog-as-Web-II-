
# Backend Sample - Node.js, Express.js y MongoDB

Este es un backend básico que permite gestionar las colecciones **Usuarios** y **Productos** en una base de datos MongoDB llamada `sample`.

## Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB (Mongoose)

## Requisitos previos
- Tener instalado [Node.js](https://nodejs.org/)
- Tener MongoDB en ejecución localmente (`mongodb://localhost:27017`)

## Instalación

1. Clona el repositorio o descarga el código fuente.
2. Navega a la carpeta del proyecto y ejecuta:

```
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
MONGO_URI=mongodb://localhost:27017/sample
PORT=3000
```

4. Ejecuta el servidor:

```
npm start
```

## Endpoints disponibles

### Usuarios

- `POST /usuarios` : Crea un nuevo usuario.
- `GET /usuarios` : Obtiene todos los usuarios.
- `PUT /usuarios/:id` : Actualiza un usuario por ID.
- `DELETE /usuarios/:id` : Elimina un usuario por ID.

### Productos

- `POST /productos` : Crea un nuevo producto.
- `GET /productos` : Obtiene todos los productos.
- `PUT /productos/:id` : Actualiza un producto por ID.
- `DELETE /productos/:id` : Elimina un producto por ID.

### Contadores y Operaciones

- `GET /contadores` : Devuelve el número total de documentos en **Usuarios** y **Productos**.
- `GET /operaciones` : Devuelve el número total de operaciones realizadas en el backend.

## Pruebas con Postman / Insomnia

Prueba las siguientes rutas enviando datos en formato JSON.

### Ejemplo de JSON para Usuarios (POST /usuarios)
```
{
    "nombre": "Juan Pérez",
    "email": "juan.perez@example.com",
    "edad": 30
}
```

### Ejemplo de JSON para Productos (POST /productos)
```
{
    "nombre": "Laptop",
    "precio": 1200,
    "stock": 10
}
```

## Capturas de prueba
(Adjuntar capturas de pantalla de las pruebas realizadas en Postman o Insomnia con los resultados exitosos)

---

Desarrollado por: [Tu Nombre]
