import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'
import { profile } from '@/services/user'

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
    setProfile: (
      state,
      action: PayloadAction<{ userProfilePhoto: string; userGender: string }>
    ) => {
      state.userProfilePhoto = action.payload.userProfilePhoto
    },
    logout: () => {}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.userProfilePhoto = action.payload.photo
    })
  }
})

export const { setUserInfo, logout, setProfile } = user.actions
export const userInfo = (state: RootState) => state.user
export default user.reducer

interface Profile {
  photo: string
}
export const fetchPosts = createAsyncThunk<Profile, void, { state: RootState }>(
  'user/getProfile',
  async (_, { getState }) => {
    try {
      const userId = getState().user.userId
      const {
        data: { data }
      } = await profile({ id: userId })
      return data
    } catch (err) {
      console.error(err)
    }
  }
)
