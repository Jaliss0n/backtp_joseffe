// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');
 
// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../database/database.js');
 
// Cria tabela no BD e seus campos
const Pedidos = sequelize.define("pedidos", {
    idPedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    nomePedido: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },
    
    /*produtoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
            model:'produtos',
            key:"idProduto"
        }
    },*/
    
    clienteId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
            model:'clientes',
            key:"idCliente"
        }
    },

    produtoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
            model:'produtos',
            key:"idProduto"
        }
    },

/*
    endCli: {
        allowNull: false,
        type: Sequelize.STRING(100),
        references:{
            model:'clientes',
            key:"end"
        }
    },

    telCli: {
        allowNull: false,
        type: Sequelize.STRING(100),
        references:{
            model:'clientes',
            key:"telefone"
        }
    },
    */


});



module.exports = Pedidos;

 /*Pedidos.associate = function(models) {
    Pedidos.hasMany(models.clientes, {foreignKey: 'idCliente',sourceKey: 'clienteId'});
}*/


