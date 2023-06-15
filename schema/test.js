const mongoose = require('mongoose')

const options = {
    timestamps: {
        createdAt: "createdOn",
        updatedAt: "updatedOn"
    }
}

const data = mongoose.Schema({
    index: Number,
    organizationId: String,
    name: String,
    website: String,
    country: String,
    description: String,
    founded: String,
    industry: String,
    numberOfEmployees: Number
}, options)

const orgDetails = mongoose.model('orgs', data)

module.exports = orgDetails
