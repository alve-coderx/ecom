const express = require("express");
const app    = express();
const port   = 8000;
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://coderx-shop:EBNv2pbpczw5GvHp@coderxalve.d8bkgae.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log("connected to db");
        const database = client.db("eshop");
        const productsArr = database.collection("products");
        const topCornerMenuArr = database.collection("topCornerMenu");

        app.get('/products', async (req, res) => {
            const cursor = productsArr.find({});
            const products = await cursor.toArray();
            res.send(products);
        })
        app.get('/products/:id', async (req, res) => {
            const  id = req.params.id;
            const query = { _id : ObjectId(id)}
            const foods = await productsArr.findOne(query)
            console.log(id)
            res.send(foods)
        })
        
    }
    finally {
        //await client.close();
    }
}

run().catch(console.dir);

app.get('/',(req,res)=> {
    res.send('sdasd')
})


app.listen(port,() => {console.log("server started")})
