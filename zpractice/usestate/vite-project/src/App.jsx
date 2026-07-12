import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [user, setuser] = useState({"Name":"shivam devraj" ,"Age" :"21"})

  
function click(){

  const Newuser = {...user};
  console.log(Newuser);

  Newuser.Name ="Roushan";
  Newuser.Age="40";

  setuser(Newuser);

}


  return (

    <>
        <h1>{user.Name}   {user.Age}</h1>

        <button onClick={click}>click me</button>


    </>
  )
}

export default App
