import { Router } from 'express';
// importación de middlewares
//import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateFiel';

import {
// importación de controladores
  getChargeAll,
  getChargeId,
  SaveCharge,
  UpdateCharge,
  DeleteCharge,
  getChargeSelect,
} from '../controller';
// import { isAdmin } from '../../middlewares/isAdmin';

const router = Router();

/**
 * Ruta GET /charge-data del API
 */
router.get('/get-charge-all', [], getChargeAll);
router.get('/get-select-charge', [], getChargeSelect);
router.get('/get-charge-id/:id', [], getChargeId);
router.post('/post-charge', [

  validateField,
], SaveCharge);

router.put('/put-charge/:id', [

  validateField,
], UpdateCharge);
router.put('/delete-charge/:id', [

  validateField,
], DeleteCharge);

export default router;
