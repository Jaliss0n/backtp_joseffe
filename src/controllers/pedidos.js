// Define a utilização do model usuario e a dependência http-status
const Pedidos = require('../models/tabPed');
const status = require('http-status');
const Cliente = require('../models/tabCli');
const Produtos = require('../models/tabProd');
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    //produto
    const idPedido = req.body.idPedido;
    const nomePedido = req.body.nomePedido;
    const clienteId = req.body.clienteId;
    const produtoId = req.body.produtoId;
 
    // Popula cada um dos campos do model com os campos recebido na request
    Pedidos.create({

        idPedido: idPedido,
        nomePedido: nomePedido,
        clienteId: clienteId,
        produtoId : produtoId,

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Pedidos.findAll(/*{
        include: [Cliente]
    }*/
    )
        .then(pedidos => {
            if (pedidos) {
                res.status(status.OK).send(pedidos);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const idPedido = req.params.idPedido;
    const clienteId = req.params.clienteId;
  


        Pedidos.findByPk(idPedido) .then(async pedidos => {
            if (pedidos) {
               

                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));

        ////////////////////pedidos////////////////////////

        /*Pedidos.findByPk(clienteId) .then(async pedidos => {
            if (pedidos) {
                let cliente = await Cliente.findByPk(pedidos.clienteId);
                pedidos.cliente = cliente;


                console.log(pedidos);

                res.status(status.OK).send(pedidos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));*/
};

exports.Update = (req, res, next) => {
    const idPedido = req.body.idPedido;
    const nomePedido = req.body.nomePedido;
    const clienteId = req.body.clienteId;
    const produtoId = req.body.produtoId;
 
    Pedidos.findByPk(idPedido)
        .then(pedidos => {
            if (pedidos) {
                pedidos.update({
                  
                    nomePedido: nomePedido,
                    clienteId: clienteId,
                    produtoId : produtoId,
                },
                    {
                        where: { idPedido: idPedido }
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
    const idPedido = req.params.idPedido;
 
    Pedidos.findByPk(idPedido)
        .then( async pedidos => {
            if (pedidos) {
                pedidos.destroy({
                    where: { idPedido: idPedido }
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
