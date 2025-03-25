import React, {useState} from 'react'


export default function TextForm(props) {

    const HanddleUpClick = ()=>{
        // console.log("up Clicked" );
        let newText= Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Upper Case" , "success")
    }
    const HanddleloClick = ()=>{
        // console.log("up Clicked" );
        let newText= Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Case" , "success")
    }
    const HandleOnChange = (event)=>{
        // console.log("on change clicked");
        setText(event.target.value);
    }
    const Handdlecopy = ()=>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Copied Text" , "success")
    }
    const Handdleclear = ()=>{
        setText("")
        props.showAlert("Cleared Text" , "success")
    }
    const HanddleExtraSpaces=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("removed Extra Spaces" , "success")
    }
    


    const [Text, setText] = useState('');
    return (
        <div className='container my-3' style={{color : props.mode==='dark'?"white":"black"}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} style={{backgroundColor: props.mode==='dark'?"#1d6796":"white" , color : props.mode==='dark'?"white":"black"}} onChange={HandleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={HanddleUpClick}>Convert to UpperCase</button>
            <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={HanddleloClick}>Convert to LowerCase</button>
            <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={Handdleclear}>Clear Text</button>
            <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={Handdlecopy}>Copy Text</button>
            <button disabled={Text.length===0}className="btn btn-primary mx-1 my-1" onClick={HanddleExtraSpaces}>Remove The Extra Spaces</button>
            <div className="container my-3">
                <h1>Your Text Summary</h1>
                <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
                <p>{0.008 * (Text.split(/\s+/).filter((element)=>{return element.length!==0}).length)} Minutes to read</p>
                <h2>Preview</h2>
                <p>{Text.length>0?Text:"Noting to preview"}</p>
            </div>
        </div>
    )
}
