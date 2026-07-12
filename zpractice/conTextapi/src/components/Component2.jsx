import Component3 from "./Component3";
function Component2() {
  return (
    <div  style={{ backgroundColor: "blue", width: "100%", height: "100%",padding: "20px"  }}>
      <h1>Component2</h1>
        <Component3 />
    </div>
  )
}

export default Component2;