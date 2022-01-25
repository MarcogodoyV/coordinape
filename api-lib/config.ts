// dotenv is needed for `./scripts/*`
// for the api/*, perhaps conditionally disable
// Long term, refactor for monorepo
import dotenv from 'dotenv';
dotenv.config();

function getEnvValue<T extends string | number>(
  key: string,
  defaultVal?: T
): T {
  const v = process.env[key];
  if (v) {
    return typeof defaultVal === 'number' ? (Number(v) as T) : (v as T);
  }
  if (defaultVal === undefined) {
    throw new Error(`Missing env variable: ${key}`);
  }
  return defaultVal;
}

export const NODE_HASURA_URL = <string>getEnvValue('NODE_HASURA_URL');
export const LOCAL_SEED_ADDRESS = <string>getEnvValue('LOCAL_SEED_ADDRESS');
export const IS_LOCAL_ENV = process.env.NODE_ENV === 'development';
