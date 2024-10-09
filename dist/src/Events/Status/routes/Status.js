"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateField_1 = require("../../../middlewares/validateField");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-status-all', [], controller_1.getStatusAll);
router.get('/get-select-status', [], controller_1.getStatusSelect);
router.get('/get-status-id/:id', [], controller_1.getStatusId);
router.post('/post-status', [validateField_1.validateField], controller_1.SaveStatus);
router.put('/put-status/:id', [validateField_1.validateField], controller_1.UpdateStatus);
router.put('/delete-status/:id', [validateField_1.validateField,], controller_1.DeleteStatus);
exports.default = router;
//# sourceMappingURL=Status.js.map