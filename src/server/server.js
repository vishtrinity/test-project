const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.json());
app.use(cors());
const api=require('./routes/api');
const PORT= 3000;

app.use('/api',api);


app.get('/',(req,res)=>{
    res.send("hello from server");
})

app.listen(PORT,()=>{
    console.log("server running on port"+PORT);
})