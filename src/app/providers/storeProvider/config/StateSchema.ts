import { UserSchema } from '@/entities/User';

export interface StateSchema {
  user: UserSchema;
}

export type StateSchemaKeys = keyof StateSchema;
