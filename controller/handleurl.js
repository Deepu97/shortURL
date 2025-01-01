const shortid=require('shortid');
const dbmongo=require('../model/userModel')
async function handleurl(req,res){
    const body=req.body;
    if(!body.redirectURL){
      return  res.status(400).json({error:'url is required'})
    }
    const short=shortid.generate();
    await dbmongo.create({
        shortId:short,
        redirectURL:body.redirectURL,
        visitHistory:[],
    })
    return res.json({id:short})

}
module.exports={handleurl}