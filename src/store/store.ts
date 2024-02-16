import { configureStore, combineReducers, Action } from '@reduxjs/toolkit'
import userRender from '@/store/user'
import modalRender from '@/store/modal'

const combinedReducer = combineReducers({
  user: userRender,
  modal: modalRender
})

type Root = ReturnType<typeof combinedReducer>

const rootReducer = (state: Root | undefined, action: Action) => {
  if (action.type === 'user/logout') {
    return combinedReducer(undefined, action)
  }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
