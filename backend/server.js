const express = require('express');
const app = express();
const {chats} = require("./data/data");

const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
console.log("ia ma here")

app.get("/",(req,res)=>{
    res.send("API is running");
});

app.get("/api/chat",(req,res)=>{
    res.send(chats);

});
app.get("/api/chat/:id",(req,res)=>{
const singleChat = chats.find((c)=>c._id === req.params.id);
res.send(singleChat);
})
app.listen(5000,console.log(`Server running on port ${PORT}`));