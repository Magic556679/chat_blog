import { configureStore, combineReducers, Action } from '@reduxjs/toolkit'
import userRender from '@/store/user'
import modalRender from '@/store/modal'
import { api } from '@/services/useUser'

const combinedReducer = combineReducers({
  user: userRender,
  modal: modalRender,
  [api.reducerPath]: api.reducer
})

type Root = ReturnType<typeof combinedReducer>

const rootReducer = (state: Root | undefined, action: Action) => {
  if (action.type === 'user/logout') {
    return combinedReducer(undefined, action)
  }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
