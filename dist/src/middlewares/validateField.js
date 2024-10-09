"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateField = void 0;
const express_validator_1 = require("express-validator");
const response_1 = require("../utils/response");
const validateField = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        const result = (0, response_1.error)('API Error Validate Field', 400, {
            message: 'Se encontraron errores',
            errors,
        });
        return res
            .status(400)
            .json(result);
    }
    return next();
};
exports.validateField = validateField;
//# sourceMappingURL=validateField.js.map