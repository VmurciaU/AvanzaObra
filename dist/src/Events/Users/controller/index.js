"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.UpdateUser = exports.SaveUserWithoutToken = exports.SaveUser = exports.getUserSelect = exports.getUserById = exports.getUserAll = void 0;
var GetUser_1 = require("./Get/GetUser");
Object.defineProperty(exports, "getUserAll", { enumerable: true, get: function () { return GetUser_1.getUserAll; } });
Object.defineProperty(exports, "getUserById", { enumerable: true, get: function () { return GetUser_1.getUserById; } });
Object.defineProperty(exports, "getUserSelect", { enumerable: true, get: function () { return GetUser_1.getUserSelect; } });
var PostUser_1 = require("./Post/PostUser");
Object.defineProperty(exports, "SaveUser", { enumerable: true, get: function () { return PostUser_1.SaveUser; } });
Object.defineProperty(exports, "SaveUserWithoutToken", { enumerable: true, get: function () { return PostUser_1.SaveUserWithoutToken; } });
var PutUser_1 = require("./Put/PutUser");
Object.defineProperty(exports, "UpdateUser", { enumerable: true, get: function () { return PutUser_1.UpdateUser; } });
var DeleteUser_1 = require("./Delete/DeleteUser");
Object.defineProperty(exports, "DeleteUser", { enumerable: true, get: function () { return DeleteUser_1.DeleteUser; } });
//# sourceMappingURL=index.js.map