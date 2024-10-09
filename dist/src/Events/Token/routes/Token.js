"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const protectedRoutes_1 = require("../../../middlewares/protectedRoutes");
const Token_1 = require("../controller/Token");
const router = (0, express_1.Router)();
router.get('/validate-token', protectedRoutes_1.valTokenAuthUser, Token_1.ValidateToken);
exports.default = router;
//# sourceMappingURL=Token.js.map