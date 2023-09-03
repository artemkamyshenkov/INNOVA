import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { UNSPLASH_API_KEY } from '../config/unsplash';

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),
  endpoints: builder => ({
    getPhotos: builder.query<any, any>({
      query: page => ({
        url: 'photos?',
        headers: { Authorization: `Client-ID ${UNSPLASH_API_KEY}` },
        params: { page, per_page: 15 },
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPhotosQuery } = mediaApi;
