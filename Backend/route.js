import  { Router } from "express";
import Sampledata from './module.js'




const router = Router()




router.route("/data").get(async(req,res)=>{
    try {
        const { end_year,intensity,sector,topic,insight,url,region,start_year,impact,added,published,country,relevance,pestle,source,title,likelihood} =  req.query;
        console.log(req.query, "query");

    const filterData = await Sampledata.find(req.query)
if(filterData.length === 0 && !filterData){
    res.status(400).json({
        error: "No data found"
    })
    return;
}
    
    res.json({length:filterData.length,filterData})
    } catch (error) {
        res.json({error})
    }
})

export default router;