import { createSlice } from '@reduxjs/toolkit'
import type { VolunteerForm }  from './VolunteerForm'

export interface VolunteerState {
    volunteers: {[id: string]: VolunteerForm}
}

const initialState: VolunteerState = {
    volunteers: {}
}


const volunteerSlice = createSlice({
    name: 'volunteers',
    initialState,
    reducers: {},
})

export default volunteerSlice.reducer
