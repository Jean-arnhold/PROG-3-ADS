import { Router } from "express";
import CarController from "./controllers/CarController.js";

const routes = new Router();

routes.get('/cars', CarController.index);
routes.get('/car', CarController.show);
routes.post('/car', CarController.store);
routes.put('/car/:placa_atual', CarController.update);
routes.delete('/car', CarController.destroy);

export default routes;