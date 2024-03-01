import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import { api } from '@/services/useUser'

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
      state.userProfilePhoto = ''
      state.userLoggedIn = true
    },
    logout: () => {}
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.profile.matchFulfilled,
      (state, { payload }) => {
        state.userProfilePhoto = payload.data.photo
      }
    )
  }
})

export const { setUserInfo, logout } = user.actions
export const userInfo = (state: RootState) => state.user
export default user.reducer
