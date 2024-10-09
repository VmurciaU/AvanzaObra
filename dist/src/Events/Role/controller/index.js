"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteRole = exports.UpdateRole = exports.SaveRoleWithoutToken = exports.SaveRole = exports.getRoleSelect = exports.getRoleId = exports.getRoleAll = void 0;
var GetRole_1 = require("./Get/GetRole");
Object.defineProperty(exports, "getRoleAll", { enumerable: true, get: function () { return GetRole_1.getRoleAll; } });
Object.defineProperty(exports, "getRoleId", { enumerable: true, get: function () { return GetRole_1.getRoleId; } });
Object.defineProperty(exports, "getRoleSelect", { enumerable: true, get: function () { return GetRole_1.getRoleSelect; } });
var PostRole_1 = require("./Post/PostRole");
Object.defineProperty(exports, "SaveRole", { enumerable: true, get: function () { return PostRole_1.SaveRole; } });
Object.defineProperty(exports, "SaveRoleWithoutToken", { enumerable: true, get: function () { return PostRole_1.SaveRoleWithoutToken; } });
var PutRole_1 = require("./Put/PutRole");
Object.defineProperty(exports, "UpdateRole", { enumerable: true, get: function () { return PutRole_1.UpdateRole; } });
var DeleteRole_1 = require("./Delete/DeleteRole");
Object.defineProperty(exports, "DeleteRole", { enumerable: true, get: function () { return DeleteRole_1.DeleteRole; } });
//# sourceMappingURL=index.js.map