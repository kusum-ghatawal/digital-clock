import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Clock from './Clock'

function App() {
  
 const [color,setColor]=useState("red")
  return (
    <div>
      <h1>
        default Props in React jsx
      </h1>
        <select style={{backgroundColor:'grey'}} onChange={(event)=>setColor(event.target.value)} >
          <option value="red">Red</option>
          <option value="Blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="green">Green</option>
        </select>
        <Clock color={color} />
    </div>
  );
}

export default App
