import {mongoose, Schema } from "mongoose";


const SampledataSchema = new Schema({
    end_year:String ,
        intensity: Number,
        sector: String,
        topic: String,
        insight: String,
        url: String,
        region: String,
        start_year:Number ,
        impact:Number ,
        added: String,
        published: String,
        country: String,
        relevance: Number,
        pestle: String,
        source: String,
        title: String,
        likelihood: Number
})

const Sampledata = mongoose.model("Sampledata",SampledataSchema)
export default Sampledata

