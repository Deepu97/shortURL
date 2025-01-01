const mongoose=require('mongoose');
async function dbConnect(dbLink){
   return mongoose.connect(dbLink).then(()=>{
        console.log('mongo connected ....')
    }).catch(()=>{
        console.log("error in mongo connection");
        
    })
}
module.exports={dbConnect}