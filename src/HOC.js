import React from 'react'

const HOC = (Component) => () =>{
    return(
        <div>
        <h2>This is HOC Component</h2>
        <Component/>
    </div>
    )
   
}

export default HOC