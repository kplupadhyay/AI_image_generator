import express from "express"
import * as dotenv from "dotenv"
import cors from "cors"

dotenv.config()
const app = express();
app.use(cors());
app.use(express.json())


app.listen(3600 );

app.get("/" , (req,res)=>{
    res.send("hello I am AI image generator")
})