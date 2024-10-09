"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateField_1 = require("../../../middlewares/validateField");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-project-all', [], controller_1.getProjectAll);
router.get('/get-select-project', [], controller_1.getProjectSelect);
router.get('/get-project-id/:id', [], controller_1.getProjectById);
router.post('/post-project', [
    validateField_1.validateField,
], controller_1.SaveProject);
router.put('/put-project/:id', [
    validateField_1.validateField,
], controller_1.UpdateProject);
router.put('/delete-project/:id', [
    validateField_1.validateField,
], controller_1.DeleteProject);
exports.default = router;
//# sourceMappingURL=Projects.js.map