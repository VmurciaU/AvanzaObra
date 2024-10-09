"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateField_1 = require("../../../middlewares/validateField");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-task-all', [], controller_1.getTaskAll);
router.get('/get-select-task', [], controller_1.getTaskSelect);
router.get('/get-task-id/:id', [], controller_1.getTaskId);
router.post('/post-task', [
    validateField_1.validateField,
], controller_1.SaveTask);
router.put('/put-task/:id', [
    validateField_1.validateField,
], controller_1.UpdateTask);
router.put('/delete-task/:id', [
    validateField_1.validateField,
], controller_1.DeleteTask);
exports.default = router;
//# sourceMappingURL=Task.js.map