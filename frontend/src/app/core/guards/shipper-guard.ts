import { CanActivateFn } from '@angular/router';

export const shipperGuard: CanActivateFn = (route, state) => {
  return true;
};
