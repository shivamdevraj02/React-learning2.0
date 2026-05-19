import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Fragment } from 'react'
import FoodItem from './components/FoodItem'
import Heathyfood from './components/Heathyfood'
import Container from './components/Container'
import InputFooditem from './components/InputFooditem'
import { useEffect } from 'react'

function App() {
  

    
      let [FoodItems, setFoodItems] = useState(["Mirzzapur", 'Gangs of wasepur', 'Breaking Bad', ]);
    


  let [textToshow , setTextToShow] = useState("food items will be shown here");

  console.log(`${textToshow} is the text to show`);
  

  const onkeydown = (event) => {

    if (event.key === "Enter") {
      let newFoodItems =  event.target.value;
      let newItems = [...FoodItems, newFoodItems];
      setFoodItems(newItems);
   
  }

}
 
  return (
    <Fragment>

      <center className='center'>
        <ol class="list-group">


          <Container>
            <Heathyfood></Heathyfood>
            <InputFooditem handleKeydown={onkeydown} />

            <FoodItem
              item={FoodItems}
              handleBuyBotton={(item) => console.log(`${item} bought on rent`)}
            />

          </Container>

          <Container>
            <p>The above movies which are shown are the most popular ones.
              if you want to see more movies, please click the button below.
              these movies are the most popular ones in the world. if you want to see more movies, please click the button below.
            </p>

          </Container>







        </ol>
      </center>

    </Fragment>

  )
}

export default App;
