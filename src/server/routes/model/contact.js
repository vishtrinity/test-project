const mongoose =require('mongoose');
const contactSchema=new mongoose.Schema({
     firstName:String,
     lastName:String,
     email:String,
     phone:String,
     status:Boolean
})

module.exports=mongoose.model('contact',contactSchema,'contacts')