const mongoose = require('mongoose')

const Company = mongoose.model('company', {
    id: Number,
    name: String,
    doc:  String,
    about:  String,
    active: Boolean,
    site: String
})

module.exports = Company

// Exemplo de JSON de Cadastro de Empresas
// {
//   "id": 1,
//   "name": "W Technology",
//   "doc": "60.429.484/0001-10",
//   "about": "W Technology, uma empresa especializada em inovar",
//   "active": true,
//   "site": "https://wtechnology.com.br/"
// }