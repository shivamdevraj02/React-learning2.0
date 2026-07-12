import { useContext } from "react";
import { MyContext } from "./components/Component1";



function Component4() {

    const  received = useContext(MyContext);
  return (
    <div  style={{ backgroundColor: "purple", width: "100%", height: "100%", padding: "20px"  }}>
      <h1>Component4</h1>
         <h2>{received}</h2>

    </div>
  )
}

export default Component4;