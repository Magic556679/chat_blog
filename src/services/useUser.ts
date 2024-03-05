import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface data {
  _id: string
  name: string
  photo: string
  gender: string
}

export interface UserResponse {
  data: data
}

export interface LoginRequest {
  id: string
}

export const userApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_SERVER_BASE_API,
    prepareHeaders: (headers) => {
      const getCookieTokenName: string | undefined = document.cookie
        .split('; ')
        .find((item) => item.includes('id_token='))
      const token: string | undefined = getCookieTokenName?.split('=')[1]

      if (token) {
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  endpoints: (builder) => ({
    profile: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: `users/profile?id=${credentials.id}`,
        method: 'GET'
      })
    })
  })
})

export const { useProfileMutation } = userApi
