import Car from "../models/Car.js";
import * as Yup from "yup";

class CarController {

    async index(req,res) {
        let cars = await Car.findAll();

        return res.json( cars );
    }



    async show(req,res) {

        const schema = Yup.object().shape({
            placa: Yup.string().required().length(8),
        });

        if(!(await schema.isValid(req.query))) {
            return res.status(400).json({ error:'Schema is not valid.' });
        }

        const { placa } = req.query;

        // Esta linha deve ser modificada
        // para que seja buscado o carro
        // com a placa informada { placa }
        let car = await Car.findOne({ where: { placa } });

        return res.json( car );
    }



    async store(req,res) {

        const schema = Yup.object().shape({
            placa: Yup.string().required().length(8),
            marca: Yup.string().required(),
            modelo: Yup.string().required(),
            ano: Yup.number().required().positive(),
            usado: Yup.boolean().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error:'Schema is not valid.' });
        }

        const { placa } = req.body;
        const { marca } = req.body;
        const { modelo } = req.body;
        const { ano } = req.body;
        const { usado } = req.body;
        

        // Esta linha deve ser modificada
        // para que seja buscado o carro
        // com a placa informada de modo
        // a evitar inserções duplicadas
       let car = await Car.findAll({ where: { placa } });

        if(!car || car.length === 0) {

            // Devemos incluir aqui o código
            // para inserir o novo carro no 
            // banco de dados
            car = await Car.create({
                placa,
                marca,
                modelo,
                ano,
                usado,
            });
        }

        return res.json(car);
    }
    


    async update(req,res) {
        
        const schemaPlacaAtual = Yup.object().shape({
            placa_atual: Yup.string().required().length(8),
        });

        if(!(await schemaPlacaAtual.isValid(req.params))) {
            return res.status(400).json({ error:'Schema is not valid.' });
        }

        const schema = Yup.object().shape({
            placa: Yup.string().required().length(8),
            marca: Yup.string().required(),
            modelo: Yup.string().required(),
            ano: Yup.number().required().positive(),
            usado: Yup.boolean().required(),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error:'Schema is not valid.' });
        }

        const { placa_atual } = req.params;

        const { placa } = req.body;
        const { marca } = req.body;
        const { modelo } = req.body;
        const { ano } = req.body;
        const { usado } = req.body;

        const dados = {
            placa,
            marca,
            modelo,
            ano,
            usado,
        }

        // Colocamos abaixo o código para
        // atualização do registro referente
        // ao carro com placa { placa_atual } 

        let car = await Car.findOne({ where: {placa} });
        
        if(car && car.length === 0) {
            await Car.update(dados, { where: { placa: placa_atual } });
        }
          
        return res.send();
    }



    async destroy(req,res) {
        const schema = Yup.object().shape({
            placa: Yup.string().required().length(8),
        });

        if(!(await schema.isValid(req.body))) {
            return res.status(400).json({ error:'Schema is not valid.' });
        }

        const { placa } = req.body;

        // Devemos modificar a linha abaixo
        // para que o carr com placa { placa }
        // seja excluido do banco de dados

        await Car.destroy({ where: { placa } });
        
        return res.send();
    }
}

export default new CarController();