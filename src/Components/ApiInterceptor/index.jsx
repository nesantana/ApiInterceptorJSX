import { api } from '@src/Services/Api' // Your config to axios
import { AxiosError } from 'axios'
import React from 'react'

export const ApiInterceptor  = () => {
  api.request.interceptors.response.use(
    (response) => response,
    (axiosError) => {
      if (axiosError.response) {
        if (axiosError.response.status === 401) {
          // Remove your token saved and send user to home
          return {
            status: 401,
            data: {},
          }
        }
        throw axiosError
      }
      if (axiosError.request) {
        throw axiosError
      }
      throw axiosError
    },
  )

  return (<></>)
}
