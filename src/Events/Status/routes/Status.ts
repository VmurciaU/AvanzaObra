import { Router } from 'express';
// importación de middlewares
//import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateField';

import {
// importación de controladores
  getStatusAll,
  getStatusId,
  SaveStatus,
  UpdateStatus,
  DeleteStatus,
  getStatusSelect,
} from '../controller';
// import { isAdmin } from '../../middlewares/isAdmin';

const router = Router();

/**
 * Ruta GET /status-data del API
 */
router.get('/get-status-all', [], getStatusAll);
router.get('/get-select-status', [], getStatusSelect);
router.get('/get-status-id/:id', [], getStatusId);
router.post('/post-status', [validateField], SaveStatus);
router.put('/put-status/:id', [validateField], UpdateStatus);
router.put('/delete-status/:id', [validateField,], DeleteStatus);

export default router;
