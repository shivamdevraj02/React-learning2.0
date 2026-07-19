import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


/*

useeffect runs multiple process side by side 
useeffect always takes a function as callback


*/

function App() {
  const [count1, setCount1] = useState(0)
  
  const [count2, setCount2] = useState(0)

  useEffect(function(){

    console.log("i am running")
     afunction


  },[count1])
  

  const afunction =()=>{

    setCount1(count1+1)

  }

  const bfunction =()=>{

    setCount2(count2-1)
    
  }

  return (
    <>
      <h1>hello dev</h1>

      <div>
        <p>A value is : {count1}</p>
        <p>B value is : {count2}</p>

      </div>

      <button onClick={
        afunction
      } >button 1</button>
      <button onClick={
        bfunction
      } >button 2</button>

      
    </>
  )
}

export default App
