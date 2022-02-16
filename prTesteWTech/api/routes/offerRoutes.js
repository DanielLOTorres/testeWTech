const router = require('express').Router()
const Offer = require('../models/Offer.js')

//Registra uma oferta
router.post('/', async (req, res) => {
    const { id, id_customer, from, to, initial_value, amount, amount_type} = req.body
        
    if (!id || !id_customer || !from || !to  || !initial_value || !amount || !amount_type) {
        return(res.status(422).json({ error: 'Id, Id do cliente, De, Para, Valor inicial, Quantidade e Tipo são campos obrigatórios' }))
    } 
    
    const modelOffer= {
        id,
        id_customer,
        from,
        to,
        initial_value,
        amount,
        amount_type
    }
                
    try {
        await Offer.create(modelOffer)
        res.status(201).json({ message: 'Oferta cadastrada com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
    
})
//Busca todos as ofertas
router.get('/', async (req, res) => {

    try {
        const offers = await Offer.find()
        res.status(200).json({ offers })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})
//Atualiza uma oferta
router.put('/:id', async (req, res) => {
    const urlId = req.params.id
    const { id, id_customer, from, to, initial_value, amount, amount_type} = req.body
        
    const modelOffer= {
        id,
        id_customer,
        from,
        to,
        initial_value,
        amount,
        amount_type
    }
    
    try {
        const updatedOffer = await Offer.updateOne({ id: urlId }, modelOffer)
        if (updatedOffer.matchedCount === 0) {
            return(res.status(422).json({ message: 'Diferenças não encontradas' }))   
        }
        res.status(200).json(modelOffer)
        
    }catch (error) {
        res.status(500).json({error: error})
    }
})
//Apaga uma oferta
router.delete('/:id', async (req, res) => {
    const urlId = req.params.id
    const modelOffer = await Offer.findOne({ id: urlId })
    
    if (!modelOffer) {
        return(res.status(422).json({ message: 'Oferta não encontrada' }))
    }
    try {
        await Offer.deleteOne({ id: urlId })
        res.status(200).json({ message: 'Oferta excluída' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router