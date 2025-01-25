const { values } = require('lodash')
const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
    name :  { type: String, required: false },
    value: { type: Number, min: 0, required: false }
})

const debtSchema = new mongoose.Schema({
    name: { type: String, required: false },
    value: { type: Number, min: 0, required: false },
    status: { type: String, required: false, upppercase: true, 
        enum: ["PAGO", "PENDENTE", "AGENDADO", ""]}
})

const billingCycleSchema = new mongoose.Schema({
    name : { type: String, required: true},
    month: { type: Number, min: 1, max: 12, required: true},
    year: { type: Number, min: 1970, max: 2500, required : true},
    credits: [creditSchema],
    debts: [debtSchema],
    userEmail: { type: String, required: true },
})

module.exports = restful.model('BillingCycle', billingCycleSchema)