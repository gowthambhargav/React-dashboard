import e, { Router } from "express";
import fs from 'node:fs/promises'
import Sampledata from './module.js'




const router = Router()

// router.route('/datauplode').post(async (req,res)=>{
//     const alldata = await fs.readFile('jsondata.json')
//  console.log(alldata.toString('utf-8'));
// try {
//     await Sampledata.create(JSON.parse(alldata))
//         res.send("jfklj")
        
// } catch (error) {
//     console.log(error);
// }
// })



router.route("/data").get((req,res)=>{
    const { endYear, topics, sector, region, pest, source, swot, country, city } = req.query;
    console.log(endYear, topics, sector, region, pest, source, swot, country, city);
    res.json({endYear, topics, sector, region, pest, source, swot, country, city})
})

export default router;