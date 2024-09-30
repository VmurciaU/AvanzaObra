import { Router } from 'express';
// importación de middlewares
import { check } from 'express-validator';

import {
  userExists,
  idUserExists,
} from '../../../helpers/dbValidators';

//TODO import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateField';

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
//TODO valTokenAuthUser
router.get('/ ', [], getUserAll);
router.get('/get-select-user', [], getUserSelect);
router.get('/get-user-id/:id', [], getUserById);
router.post('/post-user', [
  check('user', 'El Usuario no debe ser mayor de 20 caracteres').custom(userExists).isLength({ max: 20 }),
  //TODO valTokenAuthUser,
  validateField,
], SaveUser);
router.post('/post-withouttoken-user', [
  check('user', 'El Usuario no debe ser mayor de 20 caracteres').custom(userExists).isLength({ max: 20 }),
  validateField,
], SaveUserWithoutToken);
router.put('/put-user/:id', [
  check('id').custom(idUserExists),
  //TODO valTokenAuthUser,
  validateField,
], UpdateUser);
router.put('/delete-user/:id', [
  check('id').custom(idUserExists),
  //TODO valTokenAuthUser,
  validateField,
], DeleteUser);

export default router;
