import { Router } from 'express';
// importación de middlewares
import { check } from 'express-validator';

import {
  userExists,
  idUserExists,
} from '../../../helpers/dbValidators';

import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateFiel';

// importación de controladores
import {
  getUserAll,
  getUserById,
  getUserSelect,
  SaveUser,
  SaveUserWithoutToken,
  UpdateUser,
  DeleteUser,
} from '../controller';

const router = Router();

/**
 * Ruta GET /user-data del API
 */
router.get('/get-user-all', [valTokenAuthUser], getUserAll);
router.get('/get-select-user', [valTokenAuthUser], getUserSelect);
router.get('/get-user-id/:id', [valTokenAuthUser], getUserById);
router.post('/post-user', [
  check('user', 'El Usuario no debe ser mayor de 20 caracteres').custom(userExists).isLength({ max: 20 }),
  valTokenAuthUser,
  validateField,
], SaveUser);
router.post('/post-withouttoken-user', [
  check('user', 'El Usuario no debe ser mayor de 20 caracteres').custom(userExists).isLength({ max: 20 }),
  validateField,
], SaveUserWithoutToken);
router.put('/put-user/:id', [
  check('id').custom(idUserExists),
  valTokenAuthUser,
  validateField,
], UpdateUser);
router.put('/delete-user/:id', [
  check('id').custom(idUserExists),
  valTokenAuthUser,
  validateField,
], DeleteUser);

export default router;
