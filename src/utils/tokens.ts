/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { Algorithm } from 'jsonwebtoken';

/**
 * Se crea el token para enviar al frontend
 *
 * @param userData - Resultados y/o data que se quiere enviar en el response
 *
 * @author Gustavo Zuluaga <zuluagagustavo@correounivalle.edu.co>
 * @version 1.0.0
 */
export const createToken = async (userData: any) => {
  // Configuración de this app
  const payload = {
    id: userData.id,
    email: userData.email,
    name: userData.name,
    lastname: userData.lastname,
    user: userData.user,
    idRole: userData.idRole,
    role: userData.role,
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor((Date.now() / 1000) + Number(process.env.JWT_LIFETIME))
  };

  const token = jwt.sign(
    payload,
    String(process.env.JWT_SECRET),
    {
      algorithm: <Algorithm>(process.env.JWT_ALGORITHM || 'HS256')
    }
  );
  return token;
};
