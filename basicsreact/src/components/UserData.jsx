import React, { useEffect, useState } from 'react'

const UserData = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        number: "",
        email: ""
    })
    const [userData, setUserData] = useState([])
    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUserInput(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        setUserData(prev => [...prev, userInput])
    }
    useEffect(() => {
        console.log(userData)
    })
    return (
        <div>
            <form >
                <div>
                    <label>Enter Your Name:</label>
                    <input type="text" name="name" value={userInput.name} id="" onChange={inputHandler} />
                </div>
                <div>
                    <label>Enter Your Phone Number:</label>
                    <input type="tel" name="number" id="" value={userInput.number} onChange={inputHandler} />
                </div>
                <div>
                    <label>Enter Your Email:</label>
                    <input type="email" name="email" id="" value={userInput.email} onChange={inputHandler} />
                </div>
                <button onClick={onSubmitHandler}>Submit</button>
            </form>
            <div>{userData.map((data, index) => {
                return (<div key={index} >{data.name}</div>)
            })}</div>
        </div>
    )
}

export default UserData