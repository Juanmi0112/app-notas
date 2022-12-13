const mongoose = require('mongoose')

const password = 'ariasdeleon7'
const dbname = 'juanmi7'  
const uri = `mongodb+srv://juanmi7:${password}@cluster0.ua5c32d.mongodb.net/${dbname}?retryWrites=true&w=majority`


module.exports = () => mongoose.connect(uri, {userNewUrlParser: true, useUnifiedTopology: true})