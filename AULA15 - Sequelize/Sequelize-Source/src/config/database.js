/**
 * IMPLEMENTAR ESSE ARQUIVO
 */

const databaseConfig = {
  dialect: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'cars',

  define: {
    timestamps: true, // Adiciona createdAt e updatedAt automaticamente
    underscored: false, // Utiliza camelCase para os nomes das colunas
    underscoredAll: false, // Utiliza camelCase para os nomes das colunas 
    freezeTableName: true, // Não pluraliza o nome da tabela

  }

};

export default databaseConfig;