import React, { useEffect, useState } from "react";
import "/src/styles/UseEffcet.css"

const UseEffect = () => {
    const [userdata, setUserdata] = useState(null)
    const [userids, setUserids]=useState(null)
    const fetchdata = async () => {
        try {

            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            if (!response.ok) {
                throw new Error("some thing went wrong")
            }
            const resposnedata = await response.json();
            console.log(resposnedata)
            setUserdata(resposnedata)

        }
        catch (err) {
            console.log(err)
        }

    }
    useEffect(data => {
        fetchdata()
    }, [])
  const inserUserID=(data)=>{
    console.log(data)
    setUserids(data)
  }
  const handledelete=()=>{
    setUserids(null)
  }
    return (
        <>
            <h1>hello world</h1>
            <h2>data</h2>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        {/* <th>userID</th> */}
                        <th>title</th>
                        <th>body</th>
                        <th>update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userdata ? userdata.map(user => {
                            console.log(user)
                            return (

                                <tr key={user.id}>
                                    {/* <td>{user.userId}</td> */}
                                    <td>{user.id}</td>
                                    <td>{user.title}</td>
                                    <td>{user.body}</td>
                                    <td>
                                        <td><button onClick={()=>inserUserID(user.id)}>insert</button></td>
                                        <td><button onClick={()=>handledelete()}>delete</button></td>
                                    </td>
                                </tr>
                            )
                        }) : (<tr>...Loading</tr>)
                    }
                </tbody>
            </table>
            {userids&& <p>selected user id:{userids}</p>}
        </>
    )
}
export default UseEffect