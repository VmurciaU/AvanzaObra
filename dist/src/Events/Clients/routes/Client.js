"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateField_1 = require("../../../middlewares/validateField");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-client-all', [], controller_1.getClientAll);
router.get('/get-select-client', [], controller_1.getClientSelect);
router.get('/get-client-id/:id', [], controller_1.getClientId);
router.post('/post-client', [
    validateField_1.validateField,
], controller_1.SaveClient);
router.put('/put-client/:id', [
    validateField_1.validateField,
], controller_1.UpdateClient);
router.put('/delete-client/:id', [
    validateField_1.validateField,
], controller_1.DeleteClient);
exports.default = router;
//# sourceMappingURL=Client.js.map