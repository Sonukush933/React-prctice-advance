import React, { useEffect, useState } from "react";

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/Sonukush933')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
            })
    }, [])

    return (


        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github Followers : {data.login} <br />
        <img className="" src={data.avatar_url} alt="Git picture"  width={300}/> <br />
        <h2>{data.bio}</h2>
 
        </div>
    )
}


export default Github