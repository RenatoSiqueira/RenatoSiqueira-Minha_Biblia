const allBooks = (connection, testament)=>{
    return new Promise((resolve,reject)=>{
        connection.query('select namecap,abbrv from biblia_books where ?', testament, (err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        }) 
    })
}

const aboutChapter = (connection,abbrv)=>{
    return new Promise((resolve, reject)=>{
        connection.query('select namecap,qtd from biblia_books where ? limit 1', abbrv, (err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

module.exports = {
    allBooks,
    aboutChapter
}