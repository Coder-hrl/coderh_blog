import { configureStore } from '@reduxjs/toolkit'
import UserReducer from './module/user'

const store = configureStore({
  reducer: {
    user: UserReducer,
  },
})

export default store
