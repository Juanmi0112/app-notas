const mongoose = require('mongoose')

const password = 'ariasdeleon7'
const dbname = 'juanmi7'  
const uri = `mongodb+srv://juanmi7:juanmi7@cluster0.ua5c32d.mongodb.net/test`


module.exports = () => mongoose.connect(uri, {userNewUrlParser: true, useUnifiedTopology: true})