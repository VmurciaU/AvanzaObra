"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteStatus = exports.UpdateStatus = exports.SaveStatus = exports.getStatusSelect = exports.getStatusId = exports.getStatusAll = void 0;
var GetStatus_1 = require("./Get/GetStatus");
Object.defineProperty(exports, "getStatusAll", { enumerable: true, get: function () { return GetStatus_1.getStatusAll; } });
Object.defineProperty(exports, "getStatusId", { enumerable: true, get: function () { return GetStatus_1.getStatusId; } });
Object.defineProperty(exports, "getStatusSelect", { enumerable: true, get: function () { return GetStatus_1.getStatusSelect; } });
var PostStatus_1 = require("./Post/PostStatus");
Object.defineProperty(exports, "SaveStatus", { enumerable: true, get: function () { return PostStatus_1.SaveStatus; } });
var PutStatus_1 = require("./Put/PutStatus");
Object.defineProperty(exports, "UpdateStatus", { enumerable: true, get: function () { return PutStatus_1.UpdateStatus; } });
var DeleteStatus_1 = require("./Delete/DeleteStatus");
Object.defineProperty(exports, "DeleteStatus", { enumerable: true, get: function () { return DeleteStatus_1.DeleteStatus; } });
//# sourceMappingURL=index.js.map