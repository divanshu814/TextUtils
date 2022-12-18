import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
  const [text,setText]=useState("");

  const [myStyle, setMyStyle] = useState({
    fontWeight:'normal'
    
})

  const handleUpperCase=()=>{
    // console.log("Upppercase was clicked");
    let newText=text.toUpperCase();
    setText(newText);
        props.changeAlert('Text was converted to Uppercase','success');
    }
    const handleLowerCase=()=>{
        // console.log("Upppercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.changeAlert('Text was converted to Lowercase','success');
    }
    const handleBold=()=>{
        // console.log("Upppercase was clicked");
      
        setMyStyle({
          fontWeight:'bold'
        })
        // props.changeAlert('Text was converted to Bold','success');
    }
    const handleChange=(event)=>{
        // console.log("ON change");
        // eslint-disable-next-line no-restricted-globals
        setText(event.target.value);
    }
    const handleExtraSpaces =()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      props.changeAlert('Extra spaces were removed','success');
    }

    // const speak = () => {
    //   let msg = new SpeechSynthesisUtterance();
    //   msg.text = text;
    //   window.speechSynthesis.speak(msg);
    // }


  return (
    <>
    
  <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
    <h1>{props.heading}</h1>
    {/* <label htmlFor="exampleFormControlTextarea1">Example textarea</label> */}
    <div className="container" style={myStyle}>

    <textarea className="form-control"  value={text} onChange={handleChange} style={{ backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
    </div>
  <div className="mb-3">
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleUpperCase}>Convert to UpperCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleLowerCase}>Convert to LowerCase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleBold}>Convert to Bold</button>
    <button disabled={text.length===0} className="btn btn-primary mx-3 my-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
  </div>
    <h1>Your text summary</h1>
    {/* {handleExtraSpaces()} */}
    <p>{ text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>

    <h2>Preview</h2>
    <p>{text}</p>

  </div>

    </>
  )
}
