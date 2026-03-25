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

export {
    createStudentService,
    getStudentService
};