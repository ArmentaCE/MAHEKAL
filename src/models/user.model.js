import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    user:{
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    tickets:[
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "tickets",
        }
    ],
    departament:{
        type: String,      
        required: true
    },
},{
    timestamps: true,
});

export default mongoose.model("User",userSchema);
