import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import Form from "./Components/Form";
import { useState } from "react";

function App() {

  
  // let [count, setcount] = useState(0);

  // function handleIncrement(){
  //   setcount((count) => {
  //     return count+1;
  //   });
  //   setcount(count => count+1);
  //   setcount(count => count+1);
  //   setcount(count => count+1);
  //   console.log(count);
  // }
  // function handleDecrement(){
  //   setcount(count-1);
  // }
  return (
    <>
      {/* <Navbar/> */}

      {/* <button onClick={()=>{handleIncrement()}}>Increment</button>
      <h1>{count}</h1>
      <button onClick={()=>{handleDecrement()}}>Decrement</button> */}

      {/* <Footer/> */}

      <Form/>
    </>
  )
}

export default App
