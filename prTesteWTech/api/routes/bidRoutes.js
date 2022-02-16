const router = require('express').Router()
const Bid = require('../models/Bid.js')

//Registra um lance
router.post('/', async (req, res) => {
    const { id_provider, id_offer, value, amount} = req.body
        
    if (!id_provider || !id_offer || !value || !amount) {
        return(res.status(422).json({ error: 'Fornecedor, Oferta, Valor e Quantidade são campos obrigatórios' }))
    } 
    
    const modelBid= {
        id_provider,
        id_offer,
        value,
        amount
    }
            
    try {
        await Bid.create(modelBid)
        res.status(201).json({ message: 'Lance adicionado com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
        }
    
})
//Busca lances
router.get('/', async (req, res) => {

    try {
        const bids = await Bid.find()
        res.status(200).json({ bids })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})

module.exports = router