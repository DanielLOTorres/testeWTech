const router = require('express').Router()
const Customer = require('../models/Customer.js')

//Registra um Cliente
router.post('/', async (req, res) => {
    const { id, name, doc, about, active, site} = req.body
        
    if (!id || !name || !doc || !about  || !site) {
        return(res.status(422).json({ error: 'Id, Nome, CNPJ, Descrição, Atividade e Site são campos obrigatórios' }))
    } 
    
    const modelCustomer= {
        id,
        name,
        doc,
        about,
        active,
        site,
    }
            
    try {
        await Customer.create(modelCustomer)
        res.status(201).json({ message: 'Cliente cadastrado com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
    }
    
})
//Busca todos os Clientes
router.get('/', async (req, res) => {

    try {
        const customers = await Customer.find()
        res.status(200).json({ customers })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})
//Atualiza um Cliente
router.put('/:id', async (req, res) => {
    const urlId = req.params.id
    const { id, name, doc, about, active, site} = req.body
        
    const modelCustomer= {
            id,
            name,
            doc,
            about,
            active,
            site,
    }
    
    try {
        const updatedCustomer = await Customer.updateOne({ id: urlId }, modelCustomer)
        if (updatedCustomer.matchedCount === 0) {
            return(res.status(422).json({ message: 'Diferenças não encontradas' }))   
        }
        res.status(200).json(modelCustomer)
        
    }catch (error) {
        res.status(500).json({error: error})
    }
})
//Apaga um Cliente
router.delete('/:id', async (req, res) => {
    const urlId = req.params.id
    const modelCustomer = await Customer.findOne({ id: urlId })
    
    if (!modelCustomer) {
        return(res.status(422).json({ message: 'Cliente não encontrado' }))
    }
    try {
        await Customer.deleteOne({ id: urlId })
        res.status(200).json({ message: 'Cliente excluído' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router