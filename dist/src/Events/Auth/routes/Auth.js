"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Auth_controller_1 = require("../controller/Auth.controller");
const router = (0, express_1.Router)();
router.post('/login', Auth_controller_1.doLoginUser);
exports.default = router;
//# sourceMappingURL=Auth.js.map