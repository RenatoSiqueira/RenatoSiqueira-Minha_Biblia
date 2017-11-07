const express = require('express')

const indexRouter = ({connection}) =>{
    const router = express.Router()
    const indexController = require('../controllers/index')
    const bookController = require('../controllers/book')
    const chapterController = require('../controllers/chapter')
    const verseController = require('../controllers/verse')

    // Index
    /* Objetivo: Listar Livros */
    router.get('/', indexController.index.bind(null,connection))

    // Livros
    /* Objetivo: Listar Capítulos */
    router.get('/:abbrv', bookController.aboutBook.bind(null,connection))

    // Versículos
    /* Objetivo: Listar Versículos do Capítulo Selecionado */
    router.get('/:abbrv/:chapter', chapterController.listVerses.bind(null,connection))

    // Versículo
    /* Objetivo: Listar Estudo Sobre o Versículo Selecionado*/
    router.get('/:abbrv/:chapter/:verse', verseController.aboutVerse.bind(null,connection))

    return router
}

module.exports = indexRouter
