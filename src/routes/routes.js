const express = require('express');
const clientes = require ('../controllers/clientes.js');
const pedidos = require ('../controllers/pedidos.js');
const produtos = require ('../controllers/produtos.js');

const router = express.Router();


// rotas para Cliente 
router.post('/cliente', clientes.Insert);
router.get('/cliente', clientes.SelectAll);
router.get('/cliente/:idCliente', clientes.SelectDetail);
router.put('/cliente/:idCliente', clientes.Update);
router.delete('/cliente/:idCliente', clientes.Delete);

// rotas para pedidos
router.post('/pedidos', pedidos.Insert);
router.get('/pedidos', pedidos.SelectAll);
router.get('/pedidos/:idPedido', pedidos.SelectDetail);
router.put('/pedidos/:idPedido', pedidos.Update);
router.delete('/pedidos/:idPedido', pedidos.Delete);

//rotas para produtos
router.post('/produtos', produtos.Insert);
router.get('/produtos', produtos.SelectAll);
router.get('/produtos/:idProduto', produtos.SelectDetail);
router.put('/produtos/:idProduto', produtos.Update);
router.delete('/produtos/:idProduto', produtos.Delete);

module.exports = router;

