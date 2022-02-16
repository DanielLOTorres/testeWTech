const mongoose = require('mongoose')

const Offer = mongoose.model('offer', {
    id: Number,
    id_customer: Number,
    from: String,
    to: String,
    initial_value: Number,
    amount: Number,
    amount_type: String
})

module.exports = Offer

// Exemplo de JSON de Cadastro de Oferta
// {
//   "id": 1,
//   "id_customer": 1,
//   "from": "Porto Alegre - RS",
//   "to": "São Paulo - SP",
//   "initial_value": 130.00,
//   "amount": 300.00,
//   "amount_type": "TON"
// }