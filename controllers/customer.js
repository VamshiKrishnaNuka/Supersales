/**
 * Controller for customers.
 * @ Author: Vamshi Krishna Nuka
 * @ Version: 2018-11-15
 */

const express = require('express')
const api = express.Router()
const Model = require('../models/customer.js')
const LOG = require('../utils/logger.js')
const find = require('lodash.find')
const remove = require('lodash.remove')
const notfoundstring = 'customer'

api.get('/', (req, res) => {
	res.render('customer/index.ejs');
})

api.get('/create', (req, res) => {
	// TODO
	res.render('customer/create.ejs');
})

api.get('/delete/:id', (req, res) => {
	// TODO
	res.render('customer/delete.ejs');
})

api.get('/edit/:id', (req, res) => {
	// TODO
	res.render('customer/edit.ejs');
})

api.get('/details/:id', (req, res) => {
	// TODO
	res.render('customer/update.ejs');
})

module.exports = api