var dbconn = require('../data/dbconnection');
module.exports.postsGetAll=(req,res)=>{
    var client = dbconn.get();
    client.query('SELECT * FROM post;')
  .then(obj => {
      console.log(obj.rows);
      res.send(obj.rows);      
})
  .catch(e => {
      console.log(e.stack); 
})
}

module.exports.postsGetOne=(req,res)=>{
    var client =dbconn.get();
    var postId = req.params.postId;
    const query = {
        // give the query a unique name
        name: 'fetch-post-1',
        text: 'SELECT * FROM post WHERE postid = $1',
        values: [postId]
      }
      
    client.query(query)
      .then(obj => {
      console.log(obj.rows);
      res.send(obj.rows[0]);      
      })
      .catch(e => {
      console.log(e.stack); 
    })
}

module.exports.postsAddOne=(req,res)=>{
    var client =dbconn.get();
    var title = req.body.title;
    var postdata = req.body.postdata;
    const query ={
        name:'insert-post',
        text:'insert into post(title,postdata) values ($1,$2)',
        values:[title,postdata]
    }
    client.query(query)
    .then(obj => {
    //console.log(obj);
    res.json('Inserted');      
    })
    .catch(e => {
    console.log(e.stack); 
  })
  
}