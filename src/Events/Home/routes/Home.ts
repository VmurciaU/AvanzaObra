import { Router } from 'express';

import * as homeController from '../controller/Home.controller';

const router = Router();

/**
 * Ruta GET / del API
 */
router.get('/', homeController.getAppInfo);

export default router;
