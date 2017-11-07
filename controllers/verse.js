const versesModel = require('../models/verses')

/* Private Methods */
const priv_detailVerse = async (connection,abbrv,chapter,verse,req,res)=>{
    const detailVerse = await versesModel.detailVerse(connection,abbrv,chapter,verse)
    return detailVerse
}

/* About This Verse: */
const aboutVerse = async (connection,req,res)=>{
    const abbrv = req.params.abbrv
    const chapter = req.params.chapter
    const verse = req.params.verse
    const aboutVerse = await priv_detailVerse(connection,abbrv,chapter,verse)
    res.render('versiculo', {livro:aboutVerse[0].namecap, abbrv:abbrv, capitulo:chapter, versiculo: verse, texto: aboutVerse[0].text})
}

module.exports = {
    aboutVerse
}