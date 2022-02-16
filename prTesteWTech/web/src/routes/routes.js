import { createWebHistory, createRouter } from "vue-router";

import Home from '@/pages/Home'
import Company from '@/pages/Company'
import ListCompany from '@/pages/ListCompany'
import Customer from '@/pages/Customer'
import ListCustomer from '@/pages/ListCustomer'
import Offers from '@/pages/Offers'
import ListOffer from '@/pages/ListOffer'
import Bid from '@/pages/Bid'
import ListBid from '@/pages/ListBid'


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/empresas',
        name: 'Empresa',
        component: Company
    },
    {
        path: '/listarEmpresas',
        name: 'ListaEmpresas',
        component: ListCompany
    },
    {
        path: '/clientes',
        name: 'Cliente',
        component: Customer
    },
    {
        path: '/listarClientes',
        name: 'ListaClientes',
        component: ListCustomer
    },
    {
        path: '/ofertas',
        name: 'Oferta',
        component: Offers
    },
    {
        path: '/listarOfertas',
        name: 'ListaOfertas',
        component: ListOffer
    },
    {
        path: '/lances',
        name: 'Lance',
        component: Bid
    },
    {
        path: '/listarLances',
        name: 'ListaLances',
        component: ListBid
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router