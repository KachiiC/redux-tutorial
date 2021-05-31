import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import leagueReducer from '../features/league/leagueSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    league_code: leagueReducer
  },
})