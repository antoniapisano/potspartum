import mongoose from "mongoose";



const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name:{ type: String, require: true},
    phone:{ type: String, require: true},
    address:{ type: String, require: true},
    email: { type: String, require: true},
    community: { type: String, require: true}, //Community.id
    image: { type: String}, //linked from Facebook
    description: { type: String},
    restrictions: { type: []}, //Restriction[]
    authorized: { type: Boolean},
},{timestamps:true})

export default model("User", UserSchema)