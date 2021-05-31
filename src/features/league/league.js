import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setId } from './leagueSlice'
// CSS
import './league.css'

const League = () => {

    const league_code = useSelector((state) => state.league_code.value)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(setId(document.getElementById("league_code").value))
    }

    return (
        <div className="league-form">
            <form onSubmit={handleSubmit}>
                <input id="league_code"/>
            </form>
            {league_code}
        </div>
    )
}

export default League