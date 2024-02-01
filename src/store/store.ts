import { configureStore } from '@reduxjs/toolkit'
import userRender from '@/store/user'

export const store = configureStore({
  reducer: {
    user: userRender
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
