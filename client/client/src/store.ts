import { configureStore } from '@reduxjs/toolkit'
// ...

export const store = configureStore({
  reducer: {
    volunteer: volunteerReducer,
    mom: momReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch