import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CAT_API_KEY } from '../config/media';
import { PhotoCatTypes } from '@/widgets/Photo/types';

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/images/',
  }),
  endpoints: builder => ({
    getPhotos: builder.query<PhotoCatTypes[], number>({
      query: limit => ({
        url: 'search',
        headers: { 'x-api-key': CAT_API_KEY },
        params: { limit },
        method: 'GET',
      }),
      transformResponse: (response: PhotoCatTypes[]) =>
        response.filter(photo => photo.url !== null),
    }),
  }),
});

export const { useGetPhotosQuery } = mediaApi;
