const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const Contact=require('./model/contact')
const db="mongodb://localhost:27017/contactsdb";

mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true },err=>{
    if(err){
       throw err;
    }else{
        console.log("Connected to mongo db");
    }
})

    router.get('/',(req,res)=>{
        res.send("hello from api.js")
    })

    

    router.post('/addContact',(req,res)=>{
       
        let contactData=req.body;
        console.log("gfhfgh");
        let newContact=new Contact(contactData);
        newContact.save((err,data)=>{
            if(err)
            throw err;
            else{
                console.log(data);
                res.status(200).send(data);
                
            }
        })
    })



    router.get('/contactList',(req,res)=>{
        Contact.find({},(err,data)=>{
            if(err)
            throw err
            else{
            console.log("user list")
            res.status(200).send(data)
            }
        })
    })


    router.get('/contactList',(req,res)=>{
        let contactData=req.body;
        Contact.find({firstName:contactData.firstName},(err,user)=>{
            if(err)
            throw err
            else
            if(!user){
            console.log("contact not found");
            res.status(401).send("No contact found")
        }else{
            console.log(user)
            res.status(200).send(user)
        }
        })
    })









    module.exports=router;