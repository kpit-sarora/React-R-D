
const {  Client } = require('pg')
const connectionString = 'postgresql://postgres:Sahil@123@localhost/MyDB'

var _client=null;

var open = function(){
     client = new Client(
        connectionString);
      client.connect().then(client=>{
          console.log("Connection Established");
        }
        ).catch(err=> console.log("Error" +err));
};

var get  =function(){
    return client;
}

var close = function(){
    client.end();
}

module.exports={
    open:open,
    get:get,
    close:close
};
