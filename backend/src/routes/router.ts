import { Router } from 'express';
import studentRoutes from '../student/router';

const router = Router();

router.use('/students', studentRoutes);

export default router;