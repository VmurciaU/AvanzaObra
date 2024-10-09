"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelationsFromUrl = exports.getFullUrl = void 0;
const url_1 = __importDefault(require("url"));
const getFullUrl = (req) => url_1.default.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.baseUrl + req.path,
});
exports.getFullUrl = getFullUrl;
const getRelationsFromUrl = async (req) => {
    var _a;
    try {
        const { relations } = req.query;
        const aRelations = (relations && relations !== '') ? (_a = String(relations)) === null || _a === void 0 ? void 0 : _a.split(',') : [];
        return aRelations;
    }
    catch (error) {
        console.log('getRelationsFromUrl - Error');
        console.log(error);
        return [];
    }
};
exports.getRelationsFromUrl = getRelationsFromUrl;
//# sourceMappingURL=url.js.map