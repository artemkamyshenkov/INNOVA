import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CAT_API_KEY, UNSPLASH_API_KEY } from '../config/media';
import { PhotoCatTypes, UnsplashPhoto } from '@/widgets/Photo/types';

export const mediaApi = createApi({
  reducerPath: 'mediaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thecatapi.com/v1/images/',
  }),
  tagTypes: ['Photos'],
  endpoints: builder => ({
    getPhotos: builder.query<PhotoCatTypes[], number>({
      query: limit => ({
        url: 'search',
        headers: { 'x-api-key': CAT_API_KEY },
        params: { limit },
        method: 'GET',
      }),
      providesTags: () => ['Photos'],
      transformResponse: (response: PhotoCatTypes[]) =>
        response.filter(photo => photo.url !== null),
    }),
  }),
});

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),
  endpoints: builder => ({
    getPhotosUnsplash: builder.query<UnsplashPhoto[], number>({
      query: page => ({
        url: 'photos?',
        headers: { Authorization: `Client-ID ${UNSPLASH_API_KEY}` },
        params: { page, per_page: 15 },
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetPhotosUnsplashQuery } = unsplashApi;

export const { useGetPhotosQuery } = mediaApi;
