
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const usuariosRoutes = require('./routes/usuariosRoutes');
const productosRoutes = require('./routes/productosRoutes');
const contadorOperaciones = require('./middlewares/contadorOperaciones');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware global para contar operaciones
app.use(contadorOperaciones);

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);

// Endpoint para obtener el total de operaciones realizadas
app.get('/operaciones', (req, res) => {
    res.json({ totalOperaciones: req.totalOperaciones });
});

// Endpoint para obtener el número total de documentos en cada colección
const Usuario = require('./models/Usuario');
const Producto = require('./models/Producto');

app.get('/contadores', async (req, res) => {
    try {
        const totalUsuarios = await Usuario.countDocuments();
        const totalProductos = await Producto.countDocuments();
        res.json({ totalUsuarios, totalProductos });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener los contadores', error });
    }
});

// Conectar a MongoDB y levantar servidor
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en puerto ${PORT}`);
        });
    })
    .catch(error => console.error('Error al conectar a MongoDB:', error));
