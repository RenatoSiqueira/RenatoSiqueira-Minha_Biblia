const verseChapter = (connection,abbrv,chapter) =>{
    return new Promise((resolve,reject)=>{
        connection.query(`
            select bv.verse, bv.text, bb.namecap from biblia_verses as bv JOIN
            biblia_books as bb ON bb.id = bv.book
            where bb.abbrv = ? and bv.chapter = ?
        `, [abbrv,chapter], (err,results)=>{ 
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
}

module.exports = {
    verseChapter
}