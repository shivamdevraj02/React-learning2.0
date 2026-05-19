import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <center className='center-class'>
        <h1 className='fw-bolder'>Bharat Clock</h1><br />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum molestias error reiciendis optio, vel voluptates quam! Maiores voluptas exercitationem similique inventore quo dolore, quaerat accusantium, odit, deserunt amet sit tempore?</p> <br /><br />

        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est fugiat at eius, ea nobis quidem et quia molestiae natus dolorum sint eligendi tempora odio consequatur perferendis animi inventore non voluptate!</p>


      </center>



    </>
  )
}

export default App
