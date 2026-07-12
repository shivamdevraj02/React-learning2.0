import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [title, settitle] = useState(" ");

  function submitform(e){
    console.log("summited form")

  }

  return (


    <>


    <form action="" onSubmit={(e)=>{
      
      e.preventDefault();
      submitform(e);

      settitle(" ")




    }}>

     <input 
     
     type="text"
     
     placeholder = "enter your name"
     
     value={title}

     onChange={(e)=>{

      settitle(e.target.value)

     }}

     />
     <button > click </button>


    </form>



    </>
  )
}

export default App
