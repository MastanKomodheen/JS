import React, { useState } from "react";

// Define styles outside of the component
const styles = {
    inputs: {
        backgroundColor: 'lightblue',
        padding: '10px',
        borderRadius: '5px',
        margin: '10px',
        border: '2px solid black',
        width: "fit-content"
    }
};

const CustomHooks = () => {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        number: "",
        points: ""
    });
    const [userdata, setUserdata] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput(prev => ({
            ...prev,
            [name]: value
        }));
    };
    const handleSubmit = () => {
        setUserdata(prev => [...prev, userInput])
    }
    return (
        <>
            {/* Apply styles using className */}
            <div className="inputs" style={styles.inputs}>
                <label>Enter your name:</label>
                <input type="text" name="name" value={userInput.name} id="" onChange={handleChange} />
                <br />
                <label>Enter your email:</label>
                <input type="email" name="email" value={userInput.email} id="" onChange={handleChange} />
                <br />

                <label>Enter your number:</label>
                <input type="number" name="number" value={userInput.number} id="" onChange={handleChange} />
                <br />

                <label>Enter your :</label>
                <input type="range" name="points" min="0" max="10" value={userInput.points} id="" onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleSubmit}>submit</button>
            </div>
            <p>{userInput.name}</p>
            <p>{userInput.points}</p>
            <div>
                {
                    userdata.map((ele, index) => {
                        return (
                            <div key={index}>
                                <h1 >{ele.name}</h1>
                                <h2>{ele.points}</h2>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default CustomHooks;
