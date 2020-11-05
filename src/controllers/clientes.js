// Define a utilização do model usuario e a dependência http-status
const Cliente = require('../models/tabCli');
const status = require('http-status');
const Pedidos = require('../models/tabPed');
const Sequelize =  require('sequelize');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {

    // clientes
    const idCliente = req.body.idCliente;
    const nome = req.body.nome;
    const end = req.body.end;
    const email = req.body.email;
    const telefone = req.body.telefone;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Cliente.create({
        
        idCliente: idCliente,
        nome: nome,
        end : end,
        email : email,
        telefone: telefone,

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Cliente.findAll()
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const idCliente = req.params.idCliente;
 
    Cliente.findByPk(idCliente)
        .then(cliente => {
            if (cliente) {
                res.status(status.OK).send(cliente);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    
    // clientes
    const idCliente = req.body.idCliente;
    const nome = req.body.nome;
    const end = req.body.end;
    const email = req.body.email;
    const telefone = req.body.telefone;
 
    Cliente.findByPk(idCliente)
        .then(cliente => {
            if (cliente) {
                cliente.update({
                  
                   
                    idCliente: idCliente,
                    nome: nome,
                    end : end,
                    email : email,
                    telefone: telefone
                },
                    {
                        where: { idCliente: idCliente }
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};
 
exports.Delete = (req, res, next) => {
    const idCliente = req.params.idCliente;
 
    Cliente.findByPk(idCliente)
        .then(cliente => {
            if (cliente) {
                cliente.destroy({
                    where: { idCliente: idCliente }
                })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }
            else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
    };
/*Cliente.hasMany(Pedidos);
Pedidos.belongsTo(Cliente);
*/