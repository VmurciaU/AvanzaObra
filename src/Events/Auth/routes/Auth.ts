import { Router } from 'express';
import { doLoginUser } from '../controller/Auth.controller';

const router = Router();

/**
 * Ruta POST /login del API
 */
router.post('/login', doLoginUser);

export default router;
