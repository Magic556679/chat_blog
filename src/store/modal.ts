import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

export const model = createSlice({
  name: 'model',
  initialState: {
    isShow: false
  },
  reducers: {
    setToggle: (state) => {
      state.isShow = !state.isShow
    }
  }
})

export const { setToggle } = model.actions
export const userInfo = (state: RootState) => state.modal
export default model.reducer
