import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

interface UserInfo {
  name: string
  id: string
}

export const user = createSlice({
  name: 'user',
  initialState: {
    userName: '',
    userId: '',
    userProfilePhoto: '',
    userGender: '',
    userLoggedIn: false
  },
  reducers: {
    setUserInfo: (state, action: PayloadAction<UserInfo>) => {
      state.userName = action.payload.name
      state.userId = action.payload.id
      state.userLoggedIn = true
    },
    logout: () => {}
  }
})

export const { setUserInfo, logout } = user.actions
export const userInfo = (state: RootState) => state.user
export default user.reducer
