import { UISchema } from '@/entities/UI/model/types';
import { UserSchema } from '@/entities/User';

export interface StateSchema {
  user: UserSchema;
  ui: UISchema;
}

export type StateSchemaKeys = keyof StateSchema;
