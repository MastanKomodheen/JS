    import React, { useState } from 'react'

    const Usestate = () => {
        const data = "Without Use state";
        const [userState, setUserState] = useState("")
        const [buttonclick, setButtonClick] = useState(true)
        const userstatedata = () => {
            if (buttonclick) {
                setUserState(buttonclick?"clicked user":"")
                setUserState("button clicked")
                setButtonClick(false)
            }
            else{
                setUserState("")
                setButtonClick(true)
            }
        }
        return (
            <div>
                <h1>useState</h1>
                <h2>{data}</h2>
                <h2>{userState}</h2>
                <button onClick={userstatedata}>{buttonclick?"click me":"Resetme"}</button>
            </div>

        )
    }

    export default Usestate