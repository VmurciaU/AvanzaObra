"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const dbValidators_1 = require("../../../helpers/dbValidators");
const validateField_1 = require("../../../middlewares/validateField");
const controller_1 = require("../controller");
const router = (0, express_1.Router)();
router.get('/get-user-all', [], controller_1.getUserAll);
router.get('/get-select-user', [], controller_1.getUserSelect);
router.get('/get-user-id/:id', [], controller_1.getUserById);
router.post('/post-user', [
    (0, express_validator_1.check)('user', 'El Usuario no debe ser mayor de 20 caracteres').custom(dbValidators_1.userExists).isLength({ max: 20 }),
    validateField_1.validateField,
], controller_1.SaveUser);
router.post('/post-withouttoken-user', [
    (0, express_validator_1.check)('user', 'El Usuario no debe ser mayor de 20 caracteres').custom(dbValidators_1.userExists).isLength({ max: 20 }),
    validateField_1.validateField,
], controller_1.SaveUserWithoutToken);
router.put('/put-user/:id', [
    (0, express_validator_1.check)('id').custom(dbValidators_1.idUserExists),
    validateField_1.validateField,
], controller_1.UpdateUser);
router.put('/delete-user/:id', [
    (0, express_validator_1.check)('id').custom(dbValidators_1.idUserExists),
    validateField_1.validateField,
], controller_1.DeleteUser);
exports.default = router;
//# sourceMappingURL=Users.js.map