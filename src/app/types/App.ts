/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Objeto de LOG información de configuración
 */
export type LogInformation = {
  path: string;
  level: string;
  max_files: number;
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
  name: string;
  version: string;
  description: string;
  author: AuthorInformation;
  maintainers: AuthorInformation[];
  host: string;
  base_url: string;
  api_version: string;
  port: number;
  env: string;
}

/**
 * Objeto de información de configuración
 */
export type ConfigInformation = {
  app_config: AppInformation;
  log_config: LogInformation;
}

/**
 * Objeto de información de configuración
 */
export type ResponseT = {
  message: string;
  error: boolean;
  code: number;
  data: any;
}
