const mongoose = require('mongoose')
require('dotenv').config()
let mongoURI = process.env.DATABASE;

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false)
        mongoose.connect(mongoURI)
        console.log('Connected to Mongo Successfully')
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectToMongo;