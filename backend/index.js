const express = require('express');
const dotenv = require('dotenv');
const fetch  = require('node-fetch');

dotenv.config();

var cors = require('cors');

const app = express();

app.use(cors());


app.use(express.json())
const PORT = process.env.PORT || 5000;

app.get('/', (req, res)=>{
    res.send("Hello");
})
app.post('/convert-mp3', async (req, res)=>{
    const id = req.body.id;
    res.json({id:id})

})
app.listen(PORT, ()=>{
    console.log("server running on port", PORT);
})
