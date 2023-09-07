import { CurrentUser } from '@/entities/User';

export interface FriendProfileTypes extends CurrentUser {
  uuid: string;
  image?: string;
  firstname: string;
  lastname: string;
  id: number;
}
