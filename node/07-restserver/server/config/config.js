// ===================
// Puerto
// ===================
process.env.PORT = process.env.PORT || 3000;
// ===================
// Entorno
// ===================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ===================
// Vencimiento del Token
// ===================
// 60 segudnos
// 60 minutos
// 24 horas
// 30 horas
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


// ===================
// SEED de autenticación
// ===================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';


// ===================
// Base de datos
// ===================
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
    //urlDB = 'mongodb+srv://isinick:GMQjGNx54RnVHYlD@cluster0-7ewho.mongodb.net/cafe';
}

process.env.URLDB = urlDB;

// ===================
// Google Client ID
// ===================
process.env.CLIENT_ID = process.env.CLIENT_ID || '1018867059586-5t2c0ai35km8c6189a7bn9tr8196t5f2.apps.googleusercontent.com';