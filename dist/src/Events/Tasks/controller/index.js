"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteTask = exports.UpdateTask = exports.SaveTask = exports.getTaskSelect = exports.getTaskId = exports.getTaskAll = void 0;
var GetTask_1 = require("./Get/GetTask");
Object.defineProperty(exports, "getTaskAll", { enumerable: true, get: function () { return GetTask_1.getTaskAll; } });
Object.defineProperty(exports, "getTaskId", { enumerable: true, get: function () { return GetTask_1.getTaskId; } });
Object.defineProperty(exports, "getTaskSelect", { enumerable: true, get: function () { return GetTask_1.getTaskSelect; } });
var PostTask_1 = require("./Post/PostTask");
Object.defineProperty(exports, "SaveTask", { enumerable: true, get: function () { return PostTask_1.SaveTask; } });
var PutTask_1 = require("./Put/PutTask");
Object.defineProperty(exports, "UpdateTask", { enumerable: true, get: function () { return PutTask_1.UpdateTask; } });
var DeleteTask_1 = require("./Delete/DeleteTask");
Object.defineProperty(exports, "DeleteTask", { enumerable: true, get: function () { return DeleteTask_1.DeleteTask; } });
//# sourceMappingURL=index.js.map