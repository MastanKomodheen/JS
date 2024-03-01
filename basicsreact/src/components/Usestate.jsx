import React, { useState } from 'react'
import UseEffect from './UseEffect';
import CustomHooks from './CustomHooks';

const Usestate = () => {
    const data = "Without Use state";
    const [userState, setUserState] = useState("")
    const [buttonclick, setButtonclick] = useState(true)
    const userstatedata = () => {
        if (buttonclick) {
            setUserState(buttonclick ? "clicked user" : "")
            setUserState("button clicked")
            setButtonclick(false)
        }
        else {
            setUserState("")
            setButtonclick(true)
        }
    }
    return (
        <div>
            <CustomHooks/>
            <h1>useState</h1>
            <h2>{data}</h2>
            <h2>{userState}</h2>
            <button onClick={userstatedata}>{buttonclick ? "click me" : "Resetme"}</button>
        <UseEffect/>
        </div>

    )
}

export default Usestate