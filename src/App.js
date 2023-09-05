import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  const [name, setName] = useState("");
  const [color, setColor] = useState('green')
 

  return (
    <div className="App" style={{ margin: "2rem" }}>
     <ChildComponent1 count = {count} setCount = {setCount}/>
     <ChildComponent2 showText = {showText} setShowText = {setShowText}/>
     <ChildComponent3 name = {name} setName = {setName}/>
     <ChildComponent4 color = {color} setColor ={setColor}/>
 
      <div>

      </div>
    </div>
  );
}
 const  ChildComponent1 = (props)=>{
  const increment = () => {
    props.setCount(props.count + 1);
  };
  return (  <div>
    {" "}
    {props.count}
    <button style={{ margin: "1rem" }} onClick={increment}>
      Increment
    </button>
  </div>)


 }
 const  ChildComponent2 = (props)=>{
  const showHideFunc = () => {
    props.setShowText(!props.showText);
  };
  return(
    <div>
        <button onClick={showHideFunc}>show/hide</button>
        {props.showText && <p>Hello everybody!</p>}
      </div>
  )
  
 }
 const  ChildComponent3 = (props)=>{
  return(
    <div style={{ margin: "2rem" }}>
    <input value={props.name} onChange={(e) => props.setName(e.target.value)} />
    <p> Your name is {props.name}</p>
  </div>
  )
  
 }
 const  ChildComponent4 = ({color,setColor})=>{
  let style = {
    color:color
  }
  let changeColor = ()=>{
    setColor(color==='red' ?'blue':'red')
  }
  return(
    <div>
      <p style = {style}>This text can change color</p>
      <button onClick = {changeColor} >Press me</button>
    </div>
  )
 }
export default App;
