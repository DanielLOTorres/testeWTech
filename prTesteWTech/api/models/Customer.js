const mongoose = require('mongoose')

const Customer = mongoose.model('customer', {
    id: Number,
    name: String,
    doc:  String,
    about:  String,
    active: Boolean,
    site: String
})

module.exports = Customer

// Exemplo de JSON de Cadastro de Clientes
// {
//   "id": 12,
//   "name": "Transportadora Rodoclub",
//   "doc": "99.974.145/0001-50",
//   "about": "FullTime, Acessoria de Atendimento ao Cliente",
//   "active": true,
//   "site": "https://wtechnology.com.br/"
// }