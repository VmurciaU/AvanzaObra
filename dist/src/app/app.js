"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const serve_favicon_1 = __importDefault(require("serve-favicon"));
const path_1 = __importDefault(require("path"));
const setup_1 = __importDefault(require("../passport/setup"));
const errorHandlers_1 = require("../middlewares/errorHandlers");
const Home_1 = __importDefault(require("../Events/Home/routes/Home"));
const routes_1 = __importDefault(require("../routes"));
const createApp = () => {
    const app = (0, express_1.default)();
    app.use(setup_1.default.initialize());
    app.set('trust proxy', true);
    app.use(express_1.default.json({ limit: '50mb' }));
    app.use(express_1.default.urlencoded({ limit: '50mb', extended: true }));
    app.use((0, serve_favicon_1.default)(path_1.default.join(__dirname, '../public', 'favicon.ico')));
    app.use((0, cors_1.default)());
    app.use('/backend/public', express_1.default.static(path_1.default.join(__dirname, '../public')));
    app.use((0, helmet_1.default)());
    app.use((0, morgan_1.default)(' '));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({
        extended: true
    }));
    app.use(`/${process.env.API_BASE_URL}`, Home_1.default);
    app.use(`/${process.env.API_BASE_URL}/${process.env.ENV}/${process.env.CONTEXT}/${process.env.API_VERSION}`, routes_1.default);
    app.use(errorHandlers_1.logErrors);
    app.use(errorHandlers_1.errorHandler);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map