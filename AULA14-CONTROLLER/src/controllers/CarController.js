import * as Yup from 'yup';
const carros = [

    {
        placa: 'iii-8888',
        marca: 'Volkswagen',
        modelo: 'Fusca',
        ano: 1970,
    },

    {
        placa: 'abc-1234',
        marca: 'Fiat',
        modelo: 'Uno',
        ano: 1990,
    },

    {
        placa: 'def-5678',
        marca: 'Chevrolet',
        modelo: 'Corsa',
        ano: 2000,
    },

    {
        placa: 'ghi-9012',
        marca: 'Ford',
        modelo: 'Fiesta',
        ano: 2010,
    },

        
]

class CarController {

    
    
    async index(req, res) {
            return res.json(carros);
        }
    
    async show(req, res) {

            //const placa = req.query.placa;
            const { placa } = req.query;

            const carro = carros.find(c => c.placa === placa);

            return res.json(carro);
        }
    async store(req, res) {

            const carro = req.body;

            const schema = Yup.object().shape({
                placa: Yup.string().required(),
                marca: Yup.string().required(),
                modelo: Yup.string().required(),
                ano: Yup.number().min(1900).max(2023),
            });

            if (! await schema.isValid(carro)) {
                return res.status(400).json({ error: 'Validation fails' });
            }

            carros.push(carro);
            return res.json();
        }   
    async update(req, res) {

        // essa placa é a mesma da rota /:placa

            const placa = req.params;
            const indice = carros.findIndex(c => c.placa === placa);
            const carro = req.body;
            carros.splice(indice, 1, carro);
            return res.json();
        }
    async destroy(req, res) {
            const placa = req.params;
            const indice = carros.findIndex(c => c.placa === placa);
            carros.splice(indice, 1);
            return res.json();
        } 

}

export default new CarController();