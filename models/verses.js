const detailVerse = (connection,abbrv,chapter,verse)=>{
    return new Promise((resolve, reject)=>{
        connection.query(`
                select bv.text, bb.namecap from biblia_verses as bv JOIN
                biblia_books as bb ON bb.id = bv.book
                where bb.abbrv = ? and bv.chapter = ? and bv.verse = ? limit 1
            `, [abbrv,chapter,verse], (err,results)=>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

module.exports = {
    detailVerse
}