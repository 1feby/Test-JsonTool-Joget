const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//json parser
app.use(
bodyParser.urlencoded({
    extended : true
})
);
app.use(bodyParser.json());
app.listen(process.env.PORT || 5000)
app.route('/').get((req,res)=>{
    res.send("Hello world");
    console.log("Yes")
})