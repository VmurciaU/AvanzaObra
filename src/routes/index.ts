import { Router } from 'express';

// Routes API's
import homeRoute from '../Events/Home/routes/Home';
import pingServerRoute from '../Events/PingServer/routes/PingServer';

import Auth from '../Events/Auth/routes/Auth'; // autenticación
import token from '../Events/Token/routes/Token'; // Token
import User from '../Events/User/routes/User'; // User

const router = Router();

// Middleware de las solicitudes HTTP.
router.use(homeRoute);
router.use(pingServerRoute);

router.use(Auth);
router.use(token);
router.use(User);

export default router;
