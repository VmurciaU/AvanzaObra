"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProject = exports.UpdateProject = exports.SaveProjectWithoutToken = exports.SaveProject = exports.getProjectSelect = exports.getProjectById = exports.getProjectAll = void 0;
var GetProject_1 = require("./Get/GetProject");
Object.defineProperty(exports, "getProjectAll", { enumerable: true, get: function () { return GetProject_1.getProjectAll; } });
Object.defineProperty(exports, "getProjectById", { enumerable: true, get: function () { return GetProject_1.getProjectById; } });
Object.defineProperty(exports, "getProjectSelect", { enumerable: true, get: function () { return GetProject_1.getProjectSelect; } });
var PostProject_1 = require("./Post/PostProject");
Object.defineProperty(exports, "SaveProject", { enumerable: true, get: function () { return PostProject_1.SaveProject; } });
Object.defineProperty(exports, "SaveProjectWithoutToken", { enumerable: true, get: function () { return PostProject_1.SaveProjectWithoutToken; } });
var PutProject_1 = require("./Put/PutProject");
Object.defineProperty(exports, "UpdateProject", { enumerable: true, get: function () { return PutProject_1.UpdateProject; } });
var DeleteProject_1 = require("./Delete/DeleteProject");
Object.defineProperty(exports, "DeleteProject", { enumerable: true, get: function () { return DeleteProject_1.DeleteProject; } });
//# sourceMappingURL=index.js.map