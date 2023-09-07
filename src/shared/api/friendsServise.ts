import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { FriendProfileTypes } from '@/widgets/FriendProfile/types';

interface FriendsApiRes {
  total: number;
  data: FriendProfileTypes[];
}
export const friendsApi = createApi({
  reducerPath: 'friendsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakerapi.it/api/v1/',
  }),
  endpoints: builder => ({
    getFriends: builder.query<FriendsApiRes, unknown>({
      query: () => ({
        url: 'users',
        params: { _quantity: 1000 },
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetFriendsQuery } = friendsApi;
