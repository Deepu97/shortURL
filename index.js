const express=require('express');
const model=require('./model/userModel');
const cors=require('cors');
const {dbConnect}=require('./mongoconnection/mongoconnect');
dbConnect("mongodb://localhost:27017/admin")
const userrouter=require('./routes/route')
const app=express();
app.use(cors());
// app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/user',userrouter);
/////////////////
app.get('/:shortId',async(req,res)=>{
   const shortId=req.params.shortId;
    const webredirect=await model.findOneAndUpdate({
        shortId
    },{$push:{visitHistor:{Timestamp:Date.now()}}})
    res.redirect(webredirect.redirectURL);
})
//////////////////////
// app.get('/test',async(req,res)=>{
//     const user=await model.find();
//     res.end(`<h1>hello</h1>${user.map((ele)=>`<li>${ele}</li>`)} `)
// })
app.listen(5000,()=>{
    console.log("server starting.....");
    
    
})