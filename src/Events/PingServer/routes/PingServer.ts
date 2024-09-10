import { Router } from 'express';

import { getDataPing } from '../controller/PingServer';

const router = Router();

/**
 * Ruta GET /ping-server del API
 */
router.get('/ping-server', getDataPing);

export default router;
