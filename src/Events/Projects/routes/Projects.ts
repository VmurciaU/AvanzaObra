import { Router } from 'express';
import { validateField } from '../../../middlewares/validateField';

// importación de controladores
import {
  getProjectAll,
  getProjectById,
  getProjectSelect,
  SaveProject,
  //SaveProjectWithoutToken,
  UpdateProject,
  DeleteProject,
} from '../controller';

const router = Router();

/**
 * Ruta GET /user-data del API
 */
router.get('/get-project-all', [], getProjectAll);
router.get('/get-select-project', [], getProjectSelect);
router.get('/get-project-id/:id', [], getProjectById);
router.post('/post-project', [

  validateField,
], SaveProject);

router.put('/put-project/:id', [

  validateField,
], UpdateProject);
router.put('/delete-project/:id', [

  validateField,
], DeleteProject);

export default router;
