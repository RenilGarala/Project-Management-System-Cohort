import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, TaskStatusValues } from "../utils/constant.js";

const taskSchema = new Schema({
    title:{
        tpye: String,
        required: true,
        trim: true,
    },
    description:{
        tpye: String,
        required: true,
        trim: true,
    },
    project:{
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    assignedTo:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    assignedBy:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    Status:{
        type: String,
        ENUM: AvailableTaskStatuses,
        default: TaskStatusValues.TODO,
    },
    attachment:{
        type: [
            {
                url: String,
                mimetype: String,
                size: Number
            }
        ],
        default: []
    },
}, {timestamps: true})

export const Task = mongoose.model("Task", taskSchema);
