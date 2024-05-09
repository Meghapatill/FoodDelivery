import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type:Number, required:false},
    image: {type:String, required:true},
    category: {type:String, required:false},
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema)

export default foodModel;