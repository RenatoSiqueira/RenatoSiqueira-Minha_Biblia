const chapterModel = require('../models/chapters')

// Internal Method
const priv_verseChapter = async(connection,abbrv,chapter,req,res)=>{
    const verseChapter = await chapterModel.verseChapter(connection,abbrv,chapter)
    return verseChapter
}

const listVerses = async(connection,req,res)=>{
    const abbrv = req.params.abbrv
    const chapter = req.params.chapter
    const Verses = await priv_verseChapter(connection,abbrv,chapter)
    res.render('capitulo', {livro:Verses[0].namecap, abbrv: abbrv, capitulo:chapter, resultados:Verses})
}

module.exports = {
    listVerses
}