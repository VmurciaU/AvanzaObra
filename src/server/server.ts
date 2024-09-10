import * as express from 'express';

import { Server, createServer } from 'http';

export const startServer = (app: express.Application): Server => {
  const httpServer = createServer(app);

  return httpServer.listen({ port: process.env.PORT }, (): void => {
    process.stdout.write(`⚙️  Application Environment: ${process.env.ENV}\n`);
    process.stdout.write('📚 Debug logs are ENABLED\n');
    process.stdout.write(
      `🚀 API Server ready at http://localhost:${process.env.PORT}\n`
    );
  });
};
