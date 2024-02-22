import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '@/store/store'

export const model = createSlice({
  name: 'model',
  initialState: {
    isShow: false,
    modelType: ''
  },
  reducers: {
    setToggle: (state) => {
      state.isShow = !state.isShow
    },
    setModelType: (state, action) => {
      state.modelType = action.payload
    }
  }
})

export const { setToggle, setModelType } = model.actions
export const userInfo = (state: RootState) => state.modal
export default model.reducer
