const controller = {}
const connection = require('../dbConnection/connection')

controller.index = async (req, res) =>{
    try{
    
    
    const title = 'INDEX DESDE EL SERVER CON PUG Y DESDE UNA VARIABLE'
    await connection ()
    console.log('CONNECTION OK')
    res.render('index',{title})
    }catch (err){
        console.error(err)

    }
}

module.exports = controller 