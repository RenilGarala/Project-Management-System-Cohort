import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description:{
        type: String,
    },
    createdBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content:{
        type: String,
        required: true,
    }
})

export const Project = mongoose.model("Project", projectSchema);