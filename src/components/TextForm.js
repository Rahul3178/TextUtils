import React, {useState} from "react";

export default function TextForm(props) {


  const [text,setText] = useState('Enter Text here....');


    const handleUpClick =()=>{
       
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case","primary")
    }


    const handleLwClick =()=>{
       
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case","secondary")
    
    }


    const clear =()=>
    {
        setText(' ');
        props.showAlert("Empty","danger")
    
    }

       const handleCopy = () => {
      var copyText = document.getElementById("myBox");
      copyText.select();
       navigator.clipboard.writeText(copyText.value);
       props.showAlert("Text is Copied to Clipboard","info")
    
       
     
    }; 

    const handleonChange =(event)=>{
        
        setText(event.target.value);
    }


    const wordCapital=()=>{
        const str=text;
        const arr=str.split(" ");
        for(var i=0;i<arr.length;i++)
        {
            arr[i]=arr[i].toLowerCase();
            arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
        }
        const str2=arr.join(" ");
        setText(str2);
        props.showAlert("Text Capitalized","success")
    
    }

    


  return (
      <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
      <div className="container mb-3">
      <h3>{props.heading}</h3>
        <textarea
          className="form-control" id="myBox"
          style={{backgroundColor:props.mode==='dark'?'grey':'white'}}
          rows="8" value={text} onChange={handleonChange}>
        </textarea>
      </div>
      <button className="btn btn-success" onClick={handleUpClick}>Convert to Uppercase </button>
      <button className="btn btn-info mx-3" onClick={handleLwClick}>Convert to Lowercase </button>
      <button className="btn btn-primary mx-3" onClick={wordCapital}>Capitalize Words </button>
      <button className="btn btn-success mx-3" onClick={handleCopy}>Copy </button>
      <button className="btn btn-danger mx-3" onClick={clear}>Clear </button>
    
        <div className="container my-5">
            <h3>Your Summary</h3>
            <p > {text.split(" ").length} Words and {text.length} Characters</p>
            <p> {0.008*text.split(" ").length}  Minutes to Read</p>
            <h3>Preview</h3>
            <p> {text.length>0?text:'Enter Some text into above box to preview here'} </p>
        </div>
        </div>
    </>
  );
}
