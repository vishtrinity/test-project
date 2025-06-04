# Netflix Clone Example

This project is a small Angular and Node.js demonstration that mimics a simplified Netflix-style video application. The Angular frontend lives in this repository along with an Express server that provides a REST API and connects to MongoDB.

## Setup

Install dependencies in the project root and the server directory:

```bash
npm install
cd src/server && npm install
```

## Development

Start the Angular dev server and the Express backend in separate terminals:

```bash
npm start               # serves the Angular app on http://localhost:4200
cd src/server && npm start  # runs the API on http://localhost:3000
```

## Building and Serving

To build a production bundle of the Angular application run:

```bash
npm run build           # or ng build
```

The build output appears in `dist/contactBook`. You can configure the Express server in `src/server/server.js` to serve these files or use any static file server.

## Video Data Storage

The backend uses Mongoose to connect to MongoDB as shown in `src/server/routes/api.js`:

```javascript
const mongoose=require('mongoose');
const db="mongodb://localhost:27017/contactsdb";
mongoose.connect(db,{ useNewUrlParser: true , useUnifiedTopology: true },err=>{
    if(err){
       throw err;
    }else{
        console.log("Connected to mongo db");
    }
})
```

Routes like `/addContact` and `/contactList` demonstrate how entries are saved and fetched from the database:

```javascript
router.post('/addContact',(req,res)=>{
    let contactData=req.body;
    let newContact=new Contact(contactData);
    newContact.save((err,data)=>{
        if(err)
        throw err;
        else{
            res.status(200).send(data);
        }
    })
})

router.get('/contactList',(req,res)=>{
    Contact.find({},(err,data)=>{
        if(err)
        throw err
        else{
        res.status(200).send(data)
        }
    })
})
```

The data model used by these routes is defined in `src/server/routes/model/contact.js`:

```javascript
const contactSchema=new mongoose.Schema({
     firstName:String,
     lastName:String,
     email:String,
     phone:String,
     status:Boolean
})
```

In a full Netflix-like application you would expand this schema to store video metadata (title, description, and a video URL). The video files themselves can be served from a static directory or a dedicated streaming service, while the MongoDB collection stores the details needed by the Angular frontend.
