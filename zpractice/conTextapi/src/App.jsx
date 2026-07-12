import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Component3 from './components/Component3'
import Component4 from './Component4'
import { MyContext } from "./components/Component1";

function App() {
  const [count, setCount] = useState(0)
  const [mycontext ,setmycontext] = useState("Hello from App component");

  return (
    <>
      <MyContext.Provider value={mycontext}>

        

        <Component1 />
      </MyContext.Provider>
    </>
  )
}

export default App
