import { Router } from 'express';
// importación de middlewares
//import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateField';

import {
// importación de controladores
  getClientAll,
  getClientId,
  getClientSelect,
  SaveClient,
  UpdateClient,
  DeleteClient,

} from '../controller';
// import { isAdmin } from '../../middlewares/isAdmin';

const router = Router();

/**
 * Ruta GET /client-data del API
 */
router.get('/get-client-all', [], getClientAll);
router.get('/get-select-client', [], getClientSelect);
router.get('/get-client-id/:id', [], getClientId);
router.post('/post-client', [

  validateField,
], SaveClient);

router.put('/put-client/:id', [

  validateField,
], UpdateClient);
router.put('/delete-client/:id', [

  validateField,
], DeleteClient);

export default router;
