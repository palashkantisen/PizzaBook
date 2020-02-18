'use strict'

const Api = require('claudia-api-builder')
const api = new Api()

const getPizzas = require('./handlers/get-pizzas')
const getOrders = require('./handlers/get-order')
const createOrder = require('./handlers/create-order')
const updateOrder = require('./handlers/update-order')
const deleteOrder = require('./handlers/delete-order')
const updateDeliveryStatus = require('./handlers/update-delivery-status')

// Define routes
api.get('/', () => 'Welcome to Pizza API')

// Get Pizzas 
api.get('/pizzas', () => {
  return getPizzas()
})
api.get('/pizzas/{id}', (request) => {
  return getPizzas(request.pathParams.id)
}, {
  error: 404
})

// Get Orders 
api.get('/orders', (request) => {
  return getOrders()
})
api.get('/orders/{id}', (request) => {
  return getOrders(request.pathParams.id)
}, {
  error: 400
})

// Create Orders 
api.post('/orders', (request) => {
  return createOrder(request.body)
}, {
  success: 201,
  error: 400
})

// Update Orders 
api.put('/orders/{id}', (request) => {
  return updateOrder(request.pathParams.id, request.body)
}, {
  error: 400
})

// Delete Orders 
api.delete('/orders/{id}', (request) => {
  return deleteOrder(request.pathParams.id)
}, {
  error: 400
})

// Delivery 
api.post('delivery', (request) => {
  return updateDeliveryStatus(request.body)
}, {
  success: 200,
  error: 400
})

//export module 
module.exports = api
