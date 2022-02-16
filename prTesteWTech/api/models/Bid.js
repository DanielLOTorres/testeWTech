const mongoose = require('mongoose')

const Bid = mongoose.model('bid', {
    id_provider: Number,
    id_offer: Number,
    value: Number,
    amount: Number
})

module.exports = Bid

// Exemplo de JSON de Lance
// {
//   "id_provider": 12,
//   "id_offer": 1,
//   "value": 105.00,
//   "amount": 230.00
// }