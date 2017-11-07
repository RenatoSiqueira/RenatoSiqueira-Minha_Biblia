const bookModel = require('../models/books')

/* Index */
const index = async (connection,req,res)=>{
    const livrosAT = await bookModel.allBooks(connection, {testament:'1'})
    const livrosNT = await bookModel.allBooks(connection, {testament:'2'})
    res.render('index', { antigos: livrosAT, novos: livrosNT })
}

module.exports = {
    index
}