import { refresh } from './auth';

export const refreshTokenWithTimeout = () => {
  setTimeout(() => {
    refresh;
  }, 1000 * 60 * 14);
};
