const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000
//json parser
app.use(
bodyParser.urlencoded({
    extended : true
})
);
app.use(bodyParser.json());
app.listen(port,()=>{
    console.log('server started on port: '+ port);
})
app.route('/').get((req,res)=>{
    res.send("Hello world");
    console.log("Yes")
})