import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { 
    createStudentService,
    getStudentService
} from './service';

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await createStudentService(req.body);
        res.status(201).json(student);
    }   catch (error) {
        res.status(500).json({ message: 'Failed to create student', error });
    }    
};

const getStudent = async (req: Request, res: Response) => {
    try {
        const students = await getStudentService();
        res.status(200).json(students);
    }   catch (error) {
        res.status(500).json({ message: 'Fail to fetch students', error });
    }
};

export {
    createStudent,
    getStudent
};