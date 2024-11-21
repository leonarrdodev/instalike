// Iniciando servidor
import express from 'express';
import routes from './src/routes/postsRoutes.js';
// Criando uma instância do Express
const app = express();
routes(app)
// Iniciando o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor escutando...');
});
