"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PingServer_1 = require("../controller/PingServer");
const router = (0, express_1.Router)();
router.get('/ping-server', PingServer_1.getDataPing);
exports.default = router;
//# sourceMappingURL=PingServer.js.map