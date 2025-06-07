import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";
import Car from "../models/Car.js";

// Os modelos serao inseridos nesse array
const models = [Car];

class Database {
    constructor() {

        this.init();
    }

    init() {
    // Faz a conexão com o BD
    this.connection = new Sequelize(databaseConfig);

    // Carrega os models e associaçoes com map().

    // map() usa a funcao passada por argumento para cada elemento 
    // do array e devolve um novo array como resultado.
    models
        .map((model) => model.init(this.connection))
        .map(
            (model) => model.associate && model.associate(this.connection.models)
        );
    }
}

export default new Database();