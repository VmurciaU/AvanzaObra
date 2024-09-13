import { Router } from 'express';
// importación de middlewares
import { check } from 'express-validator';
import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateField';
import {
  roleExists,
  //TODO idRoleExists,
} from '../../../helpers/dbValidators';

import {
// importación de controladores
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
//TODO valTokenAuthUser
router.get('/get-role-all', [], getRoleAll);
router.get('/get-select-role', [], getRoleSelect);
router.get('/get-role-id/:id', [], getRoleId);
router.post('/post-role', [
  valTokenAuthUser,
  check('name', 'El Rol no debe ser mayor de 20 caracteres').custom(roleExists).isLength({ max: 20 }),
  validateField,
], SaveRole);
router.post('/post-withouttoken-role', [
  validateField,
], SaveRoleWithoutToken);
//TODO [valTokenAuthUser,check('id').custom(idRoleExists),validateField]
router.put('/put-role/:id', [], UpdateRole);
router.put('/delete-role/:id', [], DeleteRole);

export default router;
