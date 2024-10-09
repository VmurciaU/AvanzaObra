"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateField_1 = require("../../../middlewares/validateField");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-charge-all', [], controller_1.getChargeAll);
router.get('/get-select-charge', [], controller_1.getChargeSelect);
router.get('/get-charge-id/:id', [], controller_1.getChargeId);
router.post('/post-charge', [
    validateField_1.validateField,
], controller_1.SaveCharge);
router.put('/put-charge/:id', [
    validateField_1.validateField,
], controller_1.UpdateCharge);
router.put('/delete-charge/:id', [
    validateField_1.validateField,
], controller_1.DeleteCharge);
exports.default = router;
//# sourceMappingURL=Charge.js.map