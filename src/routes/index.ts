import { Router } from 'express';

// Routes API's
import homeRoute from '../Events/Home/routes/Home';
import pingServerRoute from '../Events/PingServer/routes/PingServer';

import Auth from '../Events/Auth/routes/Auth'; // autentication
import token from '../Events/Token/routes/Token'; // Token
import User from '../Events/User/routes/User'; // User
import Role from '../Events/Role/routes/Role'; // Role
import Charges from '../Events/Charges/routes/Charge';//Charges
import Clients from '../Events/Clients/routes/Client';//Clients
import Status from '../Events/Status/routes/Status';//Status

const router = Router();

// Middleware de las solicitudes HTTP.
router.use(homeRoute);
router.use(pingServerRoute);

router.use(Auth);
router.use(token);
router.use(User);
router.use(Role);
router.use(Charges);
router.use(Clients);
router.use(Status);

export default router;
