import { Router } from 'express';
// importación de middlewares
//import { valTokenAuthUser } from '../../../middlewares/protectedRoutes';
import { validateField } from '../../../middlewares/validateField';

import {
// importación de controladores
  getTaskAll,
  getTaskId,
  getTaskSelect,
  SaveTask,
  UpdateTask,
  DeleteTask,

} from '../controller';
// import { isAdmin } from '../../middlewares/isAdmin';

const router = Router();

/**
 * Ruta GET /client-data del API
 */
router.get('/get-task-all', [], getTaskAll);
router.get('/get-select-task', [], getTaskSelect);
router.get('/get-task-id/:id', [], getTaskId);
router.post('/post-task', [

  validateField,
], SaveTask);

router.put('/put-task/:id', [

  validateField,
], UpdateTask);
router.put('/delete-task/:id', [

  validateField,
], DeleteTask);

export default router;
