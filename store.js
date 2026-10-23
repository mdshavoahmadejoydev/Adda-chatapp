import { configureStore } from '@reduxjs/toolkit'
import activeUserSlice from './src/slices/activeUserSlice'

export const store = configureStore({
  reducer: {
    activeuser: activeUserSlice
  }
})