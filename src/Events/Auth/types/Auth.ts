// tipado la data que se requiere para el consumo del microservicio de autenticación
export type UserLdapT = {
    username: string,
    password: string,
    roles?: Array<string>,
    sessionLifeTime?: number,
};
