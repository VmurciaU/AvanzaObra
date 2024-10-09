"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
const http_1 = require("http");
const startServer = (app) => {
    const httpServer = (0, http_1.createServer)(app);
    return httpServer.listen({ port: process.env.PORT }, () => {
        process.stdout.write(`⚙️  Application Environment: ${process.env.ENV}\n`);
        process.stdout.write('📚 Debug logs are ENABLED\n');
        process.stdout.write(`🚀 API Server ready at http://localhost:${process.env.PORT}\n`);
    });
};
exports.startServer = startServer;
//# sourceMappingURL=server.js.map