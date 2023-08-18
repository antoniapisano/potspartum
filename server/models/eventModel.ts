import mongoose from "mongoose";
import { calendar } from "../types/IEvent";

const {Schema, model} = mongoose;

const EventSchema = new Schema({
    date:{type:Date, require: true},
    momId:{ type: String, require: true},
    volunteerId:{ type: String, require: true},
    status:{type:Boolean, require: true }
    
  
},{timestamps:true})

export default model<calendar>("Event", EventSchema)