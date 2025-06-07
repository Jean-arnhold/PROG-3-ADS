/**
 * IMPLEMENTAR ESSE ARQUIVO
 */
import Sequelize, { Model } from "sequelize";

class Car extends Model {

    static init(sequelize) {
        super.init(
            {
                placa: Sequelize.STRING,
                marca: Sequelize.STRING,
                modelo: Sequelize.STRING,
                ano: Sequelize.INTEGER,
                usado: Sequelize.BOOLEAN,
            },
            
            {
                sequelize,
            }
        
        );
        
        return this;
    }


}

export default Car;