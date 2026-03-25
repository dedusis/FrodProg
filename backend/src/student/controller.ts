import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { createStudentService } from './service';

const createStudent = async (req: Request, res: Response) => {
    try {
        const student = await createStudentService(req.body);
        res.status(201).json(student);
    }   catch (error) {
        res.status(500).json({ message: 'Failed to create student', error });
    }    
}

export {
    createStudent
};