import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({ baseUrl: '' });
  
export const apiSlice: any = createApi({
  baseQuery,
  tagTypes: ['User'],
  endpoints: () => ({}),
});