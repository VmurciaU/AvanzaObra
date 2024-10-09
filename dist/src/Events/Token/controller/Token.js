"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateToken = void 0;
const response_1 = require("../../../utils/response");
const ValidateToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const result = (0, response_1.success)('Validación Token', 200, {
            token,
            message: 'token valido',
        });
        res
            .status(200)
            .json(result);
    }
    catch (err) {
        next(err);
    }
};
exports.ValidateToken = ValidateToken;
//# sourceMappingURL=Token.js.map