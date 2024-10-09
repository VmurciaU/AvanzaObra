"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteCharge = exports.UpdateCharge = exports.SaveCharge = exports.getChargeSelect = exports.getChargeId = exports.getChargeAll = void 0;
var GetCharge_1 = require("./Get/GetCharge");
Object.defineProperty(exports, "getChargeAll", { enumerable: true, get: function () { return GetCharge_1.getChargeAll; } });
Object.defineProperty(exports, "getChargeId", { enumerable: true, get: function () { return GetCharge_1.getChargeId; } });
Object.defineProperty(exports, "getChargeSelect", { enumerable: true, get: function () { return GetCharge_1.getChargeSelect; } });
var PostCharge_1 = require("./Post/PostCharge");
Object.defineProperty(exports, "SaveCharge", { enumerable: true, get: function () { return PostCharge_1.SaveCharge; } });
var PutCharge_1 = require("./Put/PutCharge");
Object.defineProperty(exports, "UpdateCharge", { enumerable: true, get: function () { return PutCharge_1.UpdateCharge; } });
var DeleteCharge_1 = require("./Delete/DeleteCharge");
Object.defineProperty(exports, "DeleteCharge", { enumerable: true, get: function () { return DeleteCharge_1.DeleteCharge; } });
//# sourceMappingURL=index.js.map