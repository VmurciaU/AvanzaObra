import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';
import dotenv from 'dotenv';
import { ExtractJwt, Strategy as JwtStrategy, StrategyOptions } from 'passport-jwt';
import boom from '@hapi/boom';
import bcrypt from 'bcryptjs';

// /import utils
import { getDataSource } from '../db/dbconfig/typeormdb';

// entidades
import { User } from '../Entities/User.class';

dotenv.config();

// Lógica de una estrategia local para Login
passport.use(
  'local',
  new LocalStrategy(
    {
      session: false,
    },
    async (username, password, done) => {
      try {
        const dataSource = await getDataSource();
        const userRepository = dataSource.getRepository(User);
        const searchUser = await userRepository.findOne(
          {
            relations: ['role'],
            where: {
              user: username,
            },
          },
        );
        if (!searchUser) {
          throw boom.unauthorized(`el nombre de ${username} no existe`);
        } else {
          const isPassword = await bcrypt.compare(password, searchUser.password);
          if (isPassword) {
            return done(null, searchUser);
          }
          throw boom.unauthorized('Contraseña incorrecta');
        }
      } catch (error) {
        return done(error, false);
      }
    },
  ),
);

/** config de estrategia jwt de passport ***** */
const opts: StrategyOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: String(process.env.JWT_SECRET),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  algorithms: [process.env.JWT_ALGORITHM as any],
};
// console.log('Configuración de passport-jwt:', opts);
// Lógica de una estrategia para validación de token
passport.use(
  'jwtValidate',
  new JwtStrategy(
    opts,
    async (jwtPayload, done) => {
      try {
        const dataSource = await getDataSource();
        const userRepository = dataSource.getRepository(User);
        const searchUser = await userRepository.findOneBy({ user: jwtPayload.user });
        if (searchUser) {
          done(null, searchUser);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error, false);
      }
    },
  ),
);

export default passport;
