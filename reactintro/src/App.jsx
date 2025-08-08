import React from 'react'

const App = () => {

  const handleClick  = () => {
    alert("btn clicked bro")
  }

  const handleParam =(msg) => {
  alert(msg)
  }

  // const wrapper = () => {
  // handleParam("param click hua vro")
  // }
  
  return (
    <>

    
        
        <h1>Hwllo World</h1>
        {/* we pass reference for funcs because agar func call kre toh 
            react jo h event occur hue tak ka wait ni krta nd curly braces wala 
            func call b execute krdeta page ya component render j time 
        */}
        <button onClick={handleClick}>Click</button>
        <button onClick={()=> {
          handleParam("param click hua vro")
        }}>PARAM</button>

    </>
  )
}

export default App