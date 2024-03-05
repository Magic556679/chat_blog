import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import { userApi } from '@/services/useUser'

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
    logout: () => {},
    reset: (state) => {
      state.userName = ''
      state.userId = ''
      state.userProfilePhoto = ''
      state.userGender = ''
      state.userLoggedIn = false
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      userApi.endpoints.profile.matchFulfilled,
      (state, { payload }) => {
        state.userProfilePhoto = payload.data.photo
      }
    )
  }
})

export const { setUserInfo, logout, reset } = user.actions
export const userInfo = (state: RootState) => state.user
export default user.reducer
