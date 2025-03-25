import React from "react";

export default function About(props) {
    // const [myStyle,setmyStyle] = useState({
    //     color : 'black',
    //     backgroundColor: 'white'
    // })
  
  let myStyle= {
    color: props.mode==="dark"? "white":"black",
    backgroundColor: props.mode==="dark"?"#1d6796":"white"
  }
  return (
    
    <div >
      <div className="accordion container my-2" id="accordionExample" style={myStyle}>
        <h1 className="my-3">About Us </h1>
        <div className="container pb-3">
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                style={myStyle}
              >
                <strong>Analyze your Text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils gives you the way to analyze your text quickly and efficiently . Be it word count or character count 
              </div>
            </div>
          </div>
          <div className="accordion-item ">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                style={myStyle}
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free character counter tool that provide instant character count and word count statistics for a given text . Textutils reports the number of words and characters . Thus it is suitable for writing text with word / character limit .
              </div>
            </div>
          </div>
          <div className="accordion-item " >
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                style={myStyle}
              >
                <strong>Browser Compatible</strong> 
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body"style={myStyle}>
                TextUtils works in any browser such as chrome , firefox , Internet Explorer , sfari , opera .
              </div>
            </div>
          </div>
        {/* <button type="button" onClick={toggleStyle} class="btn btn-primary my-2">{btntext}</button> */}
        </div>
      </div>
      
    </div>
  );
}
