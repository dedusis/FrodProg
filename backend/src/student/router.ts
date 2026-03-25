import { Router } from 'express';
import { 
    createStudent,
    getStudent,
    getStudentByid
} from './controller';

const router = Router();

router.post('/', createStudent);
router.get('/', getStudent);
router.get('/:id', getStudentByid);

export default router;