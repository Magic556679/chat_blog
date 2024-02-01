import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

export const user = createSlice({
  name: 'user',
  initialState: {
    value: 0,
    userName: '',
    userId: '651eb4f4fd1130e8bb493e28',
    userProfilePhoto: '',
    userGender: '',
    userLoggedIn: false
  },
  reducers: {
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // }
  }
})

// export const { increment, decrement, incrementByAmount } = user.actions
export const userInfo = (state: RootState) => state.user
export default user.reducer
