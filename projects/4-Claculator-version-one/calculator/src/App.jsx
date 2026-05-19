import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './App.module.css';
import Button  from './components/Button'
import Display from './components/Display'


function App() {


  const [calVal, setCalValue] = useState("432");

  const onButtonclick = (buttonText) => {
    if (buttonText === 'c') {
      setCalValue("");
    } else if (buttonText === '=') {
      const result = eval(calVal);
      setCalValue(result);

    }else {
      const newDisplayValue = calVal + buttonText;
      setCalValue(newDisplayValue);
    }

  }

      


  

    return (
    <>
      <h2>Calculator</h2>

      <div className={styles.calculator}>
        <Display displayValue={calVal} />
        <Button onButtonclick={onButtonclick} />
      </div>
    </>
  )


}

export default App
