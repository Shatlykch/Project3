import mongoose from "mongoose"

const Schema = mongoose.Schema;

const apodSchema = new Schema({
    "date": Date,
    "explanation": String,
    "title": String,
    "url": String
})


export default mongoose.model('apods', apodSchema)