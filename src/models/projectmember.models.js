import mongoose, { Schema } from "mongoose";
import { AvailableTaskStatuses, UserRolesEnum } from "../utils/constant.js ";

const projectMemberSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    project:{
        type: Schema.Types.ObjectId,
        ref: "Project",
        required: true,
    },
    role:{
        type: String,
        ENUM: AvailableTaskStatuses,
        default: UserRolesEnum.MEMBER,
    }
})

export const ProjectMember = mongoose.model("ProjectMember", projectMemberSchema);