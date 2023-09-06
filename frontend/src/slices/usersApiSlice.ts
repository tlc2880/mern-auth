import { apiSlice } from './apiSlice';

const USERS_URL = '/api/users';

type userType = {
  name: string,
  email: string,
  password: string
}

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder: any) => ({
    login: builder.mutation({
      query: (data: userType) => ({
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    register: builder.mutation({
      query: (data: userType) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});
  
export const {
  useLoginMutation,
  useLogoutMutation,
  useRegisterMutation,
} = userApiSlice;