import { Router } from 'express';

import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';

import { ValidateToken } from '../controller/Token';

const router = Router();

/**
 * Ruta GET /users-data del API
 */
router.get('/validate-token', valTokenAuthUser, ValidateToken);

export default router;
