/**
 * Objeto de LOG información de configuración
 */
export type LogInformation = {
  PATH: string;
  LEVEL: string;
  MAX_FILES: number;
}

/**
 * Objeto de Autores de información de configuración
 */
export type AuthorInformation = {
  name: string;
  email?: string;
  emails?: string;
}

/**
 * Objeto de APP información de configuración
 */
export type AppInformation = {
  NAME: string;
  VERSION: string;
  DESCRIPTION: string;
  AUTHOR: AuthorInformation;
  MAINTAINERS: AuthorInformation[];
  HOST: string;
  ENV_URL: string;
  BASE_URL: string;
  CONTEXT: string;
  API_VERSION: string;
  PORT: number;
  ENV: string;
  NAME_APP: string;
}

/**
 * Objeto de información de configuración
 */
export type ConfigInformation = {
  APP: AppInformation;
  LOG: LogInformation;
}
