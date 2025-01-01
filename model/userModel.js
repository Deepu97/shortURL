const mongo=require('mongoose');
const userscheme=new mongo.Schema({
    shortId:{
        type:String,
        require:true,
        unique:true,
    },
    redirectURL:{
        type:String,
        require:true,
    },
    visitHistory:[{Timestamp:{type:Number}}]
},
    {timestamps:true},
)
const model=mongo.model('demo',userscheme);
module.exports=model;
