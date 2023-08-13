import { AuthError } from '@/shared/types/firebase';
import { ERROR_DICT } from '@/shared/constants';

export function firebaseError(errorObj: AuthError) {
  const { message } = errorObj.data.error;
  return ERROR_DICT[message];
}
