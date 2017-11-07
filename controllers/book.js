const booksModel = require('../models/books')

/* Private Methods */
const priv_aboutChapter = async (connection,abbrv,req,res)=>{
    const aboutChapter = await booksModel.aboutChapter(connection, {abbrv:abbrv})
    return aboutChapter
}

/* About This Book: */
const aboutBook = async (connection,req,res)=>{
    const abbrv = req.params.abbrv
    const aboutChapter = await priv_aboutChapter(connection,abbrv)
    res.render('livro', {livro:aboutChapter[0].namecap, qtde:aboutChapter[0].qtd, abbrv:abbrv})
}

module.exports = {
    aboutBook
}