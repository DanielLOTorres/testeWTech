//Importações
const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()

//Configuração do express
app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())

//Habilitando requisições de qualquer domínio(resolvendo erro de CORS)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Rotas de Empresas  
const companyRoutes = require('./routes/companyRoutes')
app.use('/company', companyRoutes)

// Rotas de Clientes  
const costumerRoutes = require('./routes/customerRoutes')
app.use('/customer', costumerRoutes)

//Rotas de Ofertas  
const offerRoutes = require('./routes/offerRoutes')
app.use('/offer', offerRoutes)

// //Rotas de Lances  
const bidRoutes = require('./routes/bidRoutes')
app.use('/bid', bidRoutes)

//Conexão com o MongoDB ATLAS e inicialização da API 
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@api-wtech.b7bvr.mongodb.net/DBAPIWTech?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Conectado ao MongoDB')
        app.listen(3000)
    }

    )
    .catch((err) => {
        console.log(err)

    })
