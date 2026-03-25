import mongoose, { Schema, Document } from "mongoose";
import { timeStamp } from "node:console";

export interface IStudent extends Document {
    fullName: string;
    grade: string;
    parentName?: string;
    parentEmail?: string;
    parentPhone?: string;
    weeklyHours: number;
    notes?: string;
    createdAt: Date;
    updatedAt: Date;
}

const studentSchema = new Schema<IStudent>(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        grade: {
            type: String,
            required: true,
            trim: true,
        },
        parentName: {
            type: String,
            trim: true,
        },
        parentEmail: {
            type: String,
            trim: true,
            lowercase: true,
        },
        parentPhone: {
            type: String,
            trim: true,
        },
        weeklyHours: {
            type: Number,
            required: true,
            min: 1,
            default: 2,
        },
        notes: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true
    }
);

export const Student = mongoose.model<IStudent>('Student', studentSchema);