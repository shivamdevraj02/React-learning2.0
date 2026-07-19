import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState([])

  const API= async() =>{

        const response = await fetch("https://dummyjson.com/carts");
        const data = await response.json();
        console.log(data);
        console.log("button clicked");

    setCount(data.carts)

  }

  return (
    <>
      <h1>hello devraj</h1>
      <button onClick={API}>Ladle click kar</button>
    {count.map((cart) => (

      <div>
  <p key={cart.id}>ID : {cart.id}</p>

  <p key={cart.title}>title : {cart.title}</p>
  <p key={cart.price}>price: {cart.price}</p>

  </div>

))}

    </>
  )
}

export default App
