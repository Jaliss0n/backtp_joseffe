// Define a utilização do model usuario e a dependência http-status
const Produtos = require('../models/tabProd');
const status = require('http-status');
 
// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    //produto
    const idProduto = req.body.idProduto;
    const nomeProduto = req.body.nomeProduto;
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const qtdEstoque = req.body.qtdEstoque;
    
    // Popula cada um dos campos do model com os campos recebido na request
    Produtos.create({
        idProduto: idProduto,
        nomeProduto: nomeProduto,
        precoCusto: precoCusto,
        precoVenda: precoVenda,
        qtdEstoque: qtdEstoque,
        

    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};

exports.SelectAll = (req, res, next) => {
    Produtos.findAll()
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            }
        })
        .catch(error => next(error));
}
 
exports.SelectDetail = (req, res, next) => {
    const idProduto = req.params.idProduto;
 
    Produtos.findByPk(idProduto)
        .then(produtos => {
            if (produtos) {
                res.status(status.OK).send(produtos);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Update = (req, res, next) => {
    const idProduto = req.params.idProduto;
    const nomeProduto = req.body.nomeProduto;
    const precoCusto = req.body.precoCusto;
    const precoVenda = req.body.precoVenda;
    const qtdEstoque = req.body.qtdEstoque;
    
 
    Produtos.findByPk(idProduto)
        .then(produtos => {
            if (produtos) {
                produtos.update({
                  
                    nomeProduto: nomeProduto,
                    precoCusto: precoCusto,
                    precoVenda: precoVenda,
                    qtdEstoque: qtdEstoque,
                    
                },
                    {
                        where: { idProduto: idProduto }
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
    const idProduto = req.params.idProduto;
 
    Produtos.findByPk(idProduto)
        .then(produtos => {
            if (produtos) {
                produtos.destroy({
                    where: { idProduto: idProduto }
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
