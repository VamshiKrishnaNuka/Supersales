// set up a temporary (in memory) database
const Datastore = require('nedb')
const LOG = require('../utils/logger.js')
const product = require('../data/product.json')
const order = require('../data/order.json')
const customer = require('../data/customer.json')
const orderLineItem = require('../data/orderLineItem.json')

module.exports = (app) => {
  LOG.info('START seeder.')
  const db = {}

  db.product = new Datastore()
  db.product.loadDatabase()

  // insert the sample data into our data store
  db.product.insert(product)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.product = db.product.find(product)
  LOG.debug(`${app.locals.product.query.length} product seeded`)

  //creating order datastore
  db.order = new Datastore()
  db.order.loadDatabase()

  // insert the sample data into our data store
  db.order.insert(order)

  // initialize app.locals (these objects will be available to our controllers)
  app.locals.order = db.order.find(order)
  LOG.debug(`${app.locals.order.query.length} order seeded`)

  // Creating customer datastore
  db.customer = new Datastore()
  db.customer.loadDatabase()

  // Insert customer data
  db.customer.insert(customer)

  // initialize app.locals, count customer
  app.locals.customer = db.customer.find(customer)
  LOG.debug(`${app.locals.customer.query.length} customer seeded`)
  
  //creating orderLineItem datastore
  db.orderLineItem = new Datastore()
  db.orderLineItem.loadDatabase()

  //Insert orderLineItem data
  db.orderLineItem.insert(orderLineItem)

  //  initialize app.locals
  app.locals.orderLineItem = db.orderLineItem.find(orderLineItem)
  LOG.debug(`${app.locals.orderLineItem.query.length} Order Line seeded`)

  LOG.info('END Seeder. Sample data read and verified.');


}