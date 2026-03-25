import { Request, Response } from 'express';
import mongoose from 'mongoose';
import { 
    createStudentService,
    getStudentService,
    getStudentByIdService
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

const getStudentByid = async (
    req: Request<{ id: string }>,
    res: Response) => {
    try{
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: 'Invalid student id' });
            return;
        }

        const student = await getStudentByIdService(id);

        if (!student) {
            res.status(404).json({ message: 'Student not found' });
            return;
        }

        res.status(200).json(student);
    }   catch (error) {
        res.status(500).json({ message: 'Failed to fetch student', error });
    }
};

export {
    createStudent,
    getStudent,
    getStudentByid
};