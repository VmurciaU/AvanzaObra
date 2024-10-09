"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const protectedRoutes_1 = require("../../../middlewares/protectedRoutes");
const validateField_1 = require("../../../middlewares/validateField");
const dbValidators_1 = require("../../../helpers/dbValidators");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-role-all', [], controller_1.getRoleAll);
router.get('/get-select-role', [], controller_1.getRoleSelect);
router.get('/get-role-id/:id', [], controller_1.getRoleId);
router.post('/post-role', [
    protectedRoutes_1.valTokenAuthUser,
    (0, express_validator_1.check)('name', 'El Rol no debe ser mayor de 20 caracteres').custom(dbValidators_1.roleExists).isLength({ max: 20 }),
    validateField_1.validateField,
], controller_1.SaveRole);
router.post('/post-withouttoken-role', [
    validateField_1.validateField,
], controller_1.SaveRoleWithoutToken);
router.put('/put-role/:id', [], controller_1.UpdateRole);
router.put('/delete-role/:id', [], controller_1.DeleteRole);
exports.default = router;
//# sourceMappingURL=Role.js.map