"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteClient = exports.UpdateClient = exports.SaveClient = exports.getClientSelect = exports.getClientId = exports.getClientAll = void 0;
var GetClient_1 = require("./Get/GetClient");
Object.defineProperty(exports, "getClientAll", { enumerable: true, get: function () { return GetClient_1.getClientAll; } });
Object.defineProperty(exports, "getClientId", { enumerable: true, get: function () { return GetClient_1.getClientId; } });
Object.defineProperty(exports, "getClientSelect", { enumerable: true, get: function () { return GetClient_1.getClientSelect; } });
var PostClient_1 = require("./Post/PostClient");
Object.defineProperty(exports, "SaveClient", { enumerable: true, get: function () { return PostClient_1.SaveClient; } });
var PutClient_1 = require("./Put/PutClient");
Object.defineProperty(exports, "UpdateClient", { enumerable: true, get: function () { return PutClient_1.UpdateClient; } });
var DeleteClient_1 = require("./Delete/DeleteClient");
Object.defineProperty(exports, "DeleteClient", { enumerable: true, get: function () { return DeleteClient_1.DeleteClient; } });
//# sourceMappingURL=index.js.map