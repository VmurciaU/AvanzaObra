import { Router } from 'express';
// importacion de middlewares
import { check } from 'express-validator';
import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateFiel';
import {
  roleExists,
  idRoleExists,
} from '../../../helpers/dbValidators';

import {
// importacion de controladores
  getRoleAll,
  getRoleId,
  SaveRole,
  SaveRoleWithoutToken,
  UpdateRole,
  DeleteRole,
  getRoleSelect,
} from '../controller';
// import { isAdmin } from '../../middlewares/isAdmin';

const router = Router();

/**
 * Ruta GET /role-data del API
 */
router.get('/get-role-all', [valTokenAuthUser], getRoleAll);
router.get('/get-select-role', [valTokenAuthUser], getRoleSelect);
router.get('/get-role-id/:id', [valTokenAuthUser], getRoleId);
router.post('/post-role', [
  valTokenAuthUser,
  check('name', 'El Rol no debe ser mayor de 20 caracteres').custom(roleExists).isLength({ max: 20 }),
  validateField,
], SaveRole);
router.post('/post-withouttoken-role', [
  check('name', 'El Usuario no debe ser mayor de 20 caracteres').custom(roleExists).isLength({ max: 20 }),
  validateField,
], SaveRoleWithoutToken);
router.put('/put-role/:id', [
  valTokenAuthUser,
  check('id').custom(idRoleExists),
  validateField,
], UpdateRole);
router.put('/delete-role/:id', [
  valTokenAuthUser,
  check('id').custom(idRoleExists),
  validateField,
], DeleteRole);

export default router;
