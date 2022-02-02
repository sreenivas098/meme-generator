import React from 'react'
import MemeForm from "./memeform";

const App = () =>{
  
  return(
    <div style={{height:"100vh"}}>
      <h1 style={{color:'red',backgroundColor:'blue',flexWrap:'wrap',textAlign:'center',fontSize:60}}>MEME GENERATOR</h1>

      <MemeForm />
    </div>
  )

}
export default App;

