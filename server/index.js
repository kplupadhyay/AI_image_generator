import express from "express"

const app = express();

app.listen(3600 );

app.get("/" , (req,res)=>{
    res.send("hello I am AI image generator")
})