import { configureStore, combineReducers, Action } from '@reduxjs/toolkit'
import userRender from '@/store/userSlice'
import modalRender from '@/store/modal'
import { userApi } from '@/services/useUser'

const combinedReducer = combineReducers({
  user: userRender,
  modal: modalRender,
  [userApi.reducerPath]: userApi.reducer
})

type Root = ReturnType<typeof combinedReducer>

const rootReducer = (state: Root | undefined, action: Action) => {
  // if (action.type === 'user/logout') {
  //   return combinedReducer(undefined, action)
  // }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
