import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { UC,LC,NC,SC } from "./key";

function App() {
  let [upperCase,setUpperCase]=useState(false);
  let [lowerCase,setLowerCase]=useState(false);
  let [number,setNumber]=useState(false);
  let [symbols,setSymbols]=useState(false);
  let [Passwordlength,setPasswordlength]  = useState(10);
  let [fpass,setFpass] = useState('');

  let createPassword=()=>{
    let charSet = '';
    let finalpass= '';
    if(upperCase || lowerCase || number || symbols)
    {
     if(upperCase) charSet += UC; 
     if(lowerCase) charSet += LC; 
     if(number) charSet += NC; 
     if(symbols) charSet += SC
     
      for(let i=0;i<Passwordlength;i++)
      {
        finalpass += charSet.charAt( Math.floor(Math.random()* charSet.length))
      }

    }
    else{
      alert("Atleat check one box  ....!");
    }
    
    setFpass(finalpass);
  }
  let copyPass =()=>{
    navigator.clipboard.writeText(fpass);
  }
  return (
    <div className="App">
      <h1>PASSWORD GENERATOR</h1>

      <div className="Password-App">
        <div className="reform">
          <input type="text" value={fpass}readOnly />{" "}
          <span>
            <button onClick={copyPass}>Copy</button>
          </span>
        </div>
        <div className="passlength">
          <label>Password Length</label>
          <input type="number" min={5} max={15} value={Passwordlength} onChange={(event)=>{setPasswordlength(event.target.value)}} />
        </div>
        <div className="similar">
          <label>Include Uppercase letters</label>
          <input type="checkbox" checked={upperCase} onClick={()=>{setUpperCase(!upperCase)}}/>
        </div>
        <div className="similar">
          <label>Include Lowercase letters</label>
          <input type="checkbox" checked={lowerCase} onClick={()=>{setLowerCase(!lowerCase)}}/>
        </div>
        <div className="similar">
          <label>Include numbers</label>
          <input type="checkbox" className="last" checked={number} onClick={()=>{setNumber(!number)}} />
        </div>
        <div className="similar">
          <label>Include symbols</label>
          <input type="checkbox" className="last" checked={symbols} onClick={()=>{setSymbols(!symbols)}}/>
         
        </div>
        <button className="gpassword" onClick={createPassword}>Generate Password</button>
      </div>
      
    </div>
  );
}
export default App;
