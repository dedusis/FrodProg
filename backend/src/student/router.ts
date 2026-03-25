import { Router } from 'express';
import { 
    createStudent,
    getStudent
} from './controller';

const router = Router();

router.post('/', createStudent);
router.get('/', getStudent);

export default router;