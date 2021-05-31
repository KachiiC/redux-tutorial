import { createSlice } from '@reduxjs/toolkit'

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

export const leagueSlice = createSlice({
  name: 'league_code',
  initialState: {
    id: 0,
  },
  reducers: {
    setId: (state) => {
      state.value = state.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { setId } = leagueSlice.actions

export default leagueSlice.reducer