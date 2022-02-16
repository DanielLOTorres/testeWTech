const router = require('express').Router()
const Company = require('../models/Company.js')

//Registra uma empresa
router.post('/', async (req, res) => {
    const { id, name, doc, about, active, site} = req.body
        
    if (!id || !name || !doc || !about  || !site) {
        return(res.status(422).json({ error: 'Id, Nome, CNPJ, Descrição, Atividade e Site são campos obrigatórios' }))
    } 
    
    const modelCompany= {
        id,
        name,
        doc,
        about,
        active,
        site,
    }
            
    try {
        await Company.create(modelCompany)
        res.status(201).json({ message: 'Empresa cadastrada com sucesso' })
    } catch (error) {
        res.status(500).json({ error: error })
        }
    
})
//Busca empresas
router.get('/', async (req, res) => {

    try {
        const companies = await Company.find()
        res.status(200).json({ companies })
    } catch (error) {
        res.status(500).json({ error: error })
    }
})
//Atualiza uma empresa
router.put('/:id', async (req, res) => {
    const urlId = req.params.id
    const { id, name, doc, about, active, site} = req.body
        
    const modelCompany= {
            id,
            name,
            doc,
            about,
            active,
            site,
    }
    
    try {
        const updatedCompany = await Company.updateOne({ id: urlId }, modelCompany)
        if (updatedCompany.matchedCount === 0) {
            return(res.status(422).json({ message: 'Diferenças não encontradas' }))   
        }
        res.status(200).json(modelCompany)
        
    }catch (error) {
        res.status(500).json({error: error})
    }
})
//Apaga uma empresa
router.delete('/:id', async (req, res) => {
    const urlId = req.params.id
    const modelCompany = await Company.findOne({ id: urlId })
    
    if (!modelCompany) {
        return(res.status(422).json({ message: 'Empresa não encontrada' }))
    }
    try {
        await Company.deleteOne({ id: urlId })
        res.status(200).json({ message: 'Empresa excluída' })
    } catch (error) {
        res.status(500).json({error: error})
    }
})

module.exports = router