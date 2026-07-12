import Component2 from "./Component2";
import { createContext } from "react";

export const MyContext = createContext("Default Value");

function Component1() {
  return (
    <div  style={{ backgroundColor: "red", width: "100%", height: "100%" , padding: "20px"}}>
      <h1>Component1</h1>
      <select name="select" id="none" onChange={(event)=>setmycontext(event.target.value)}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>

      </select>
      <Component2 />
    </div>
  )
}

export default Component1;
