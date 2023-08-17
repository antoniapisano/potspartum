import { configureStore } from '@reduxjs/toolkit'
import volunteersReducer from "../components/VolunteerSlice"

export const store = configureStore({
  reducer: {
    volunteer: volunteersReducer,
    //mom: momsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch