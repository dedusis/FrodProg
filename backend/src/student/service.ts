import { Student, IStudent } from './model';

type CreateStudentInput = {
    fullName: string;
    grade: string;
    parentName?: string;
    parentEmail?: string;
    parentPhone?: string;
    weeklyHours?: number;
    notes?: string;
};

type UpdateStudentInput = Partial<CreateStudentInput>;

const createStudentService = async (
    data: CreateStudentInput
): Promise<IStudent> => {
    const student = await Student.create(data);
    return student;
};

const getStudentService = async (): Promise<IStudent[]> => {
    return Student.find().sort({ createdAt: -1 });
}

const getStudentByIdService = async (
    id: string
): Promise<IStudent | null> => {
    return Student.findById(id);
}


export {
    createStudentService,
    getStudentService,
    getStudentByIdService
};