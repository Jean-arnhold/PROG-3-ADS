import { Router } from 'express';
import CarController from './controllers/CarController.js';


const routes = Router();

routes.get('/cars', CarController.index);
routes.get('/car', CarController.show);

routes.post('/car', CarController.store);
routes.put('/car/:placa', CarController.update);

routes.delete('/car/:placa', CarController.destroy);









// Aqui vou colocar minhas rotas
//Rotas são caminhos (paths) associados a middlewares


routes.get('/ola', (req, res, next) => {
    const msg = {
        mensagem: 'Olá, Mundo!'
    }

    res.send(msg);
} );

export default routes;