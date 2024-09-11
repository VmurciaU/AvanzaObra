import { getDataSource } from '../db/dbconfig/typeormdb';
import { Users } from '../Entities/Users.class';
import { Roles } from '../Entities/Roles.class';

// user
export const userExists = async (user = '') => {
  const dataSource = await getDataSource();
  const userRepository = dataSource.getRepository(Users);
  const userExist = await userRepository.findOneBy({ email: user });
  if (userExist) {
    throw new Error(`El Usuario: ${user}, ya está registrado`);
  }
};

export const idUserExists = async (id: number) => {
  const dataSource = await getDataSource();
  const userRepository = dataSource.getRepository(Users);
  const existsIdUser = await userRepository.findOneBy({ id });
  if (!existsIdUser) {
    throw new Error(`El Id: ${id}, no existe`);
  }
};

// roles
export const idRoleExists = async (id: number) => {
  const dataSource = await getDataSource();
  const rolRepository = dataSource.getRepository(Roles);
  const existsIdRole = await rolRepository.findOneBy({ id });
  if (!existsIdRole) {
    throw new Error(`El Id: ${id}, no existe`);
  }
};

export const roleExists = async (name: string) => {
  const dataSource = await getDataSource();
  const rolRepository = dataSource.getRepository(Roles);
  const rolExist = await rolRepository.findOneBy({ name });
  if (rolExist) {
    throw new Error(`El rol: ${name}, ya está registrado`);
  }
};
