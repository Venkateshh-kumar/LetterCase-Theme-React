import React, {useState} from 'react'

export default function TextForm(props) {
    
    const HandleUPCase=()=>{
        console.log("Upper case was clicked")
        setText("U have updated box value")
        let newText= text.toUpperCase()
        setText(newText)

    }

    const HandleLOWERCase=()=>{
      console.log("lowercase button is clicked")
      let newText=text.toLowerCase();
      setText(newText);

    }

    const AllClear=()=>{
      let newText=""
      setText(newText)

    }
    const CopyCase=()=>{
      let newText=document.getElementById("mybox")
      newText.select();
      navigator.clipboard.writeText(newText.value)           //by using navigator it copy all the selected letter from clipboard

    }
    const handleOnChange=(event)=>{
        console.log('on handle is continued')
        setText(event.target.value)
    }

    const[text, setText] = useState("")       //text -> letter that we are entering in box
                                                            //setText -> which will apper after clicked button in UPPERCASE form

  let myStyle={
    backgroundColor: 'pink',
    border: '2px solid red'
  }
  return (
    <>
    <div className='container' style={myStyle}>
      <h1 style={{color: props.mode==='dark'?'black':'black'}}>{props.title}</h1>
    </div>
        <div className="mb-5" style={myStyle}>                
        <textarea className="form-control" id="mybox" value={text} style={{backgroundColor: props.mode==='light'?'lightyellow':'white', Color: props.mode==='light'?'yellow':'white' }} onChange={handleOnChange} placeholder='Enter your text' rows="6"></textarea>
        </div> 
        <div>
        <button className='btn btn-primary mx-2'onClick={HandleUPCase}>UPPERCASE</button>
        <button className='btn btn-primary mx-2' onClick={HandleLOWERCase}>lowercase</button>
        <button className='btn btn-primary mx-2' onClick={CopyCase}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={AllClear}>Clear</button>
        </div>                     
    {/* my-5 -- take the gap of 5 in y-axis
    mx-2 -- take the gap of 2 in x-axis */}

    <div className='container' style={{color: props.mode==='dark'?'cyan':'black'}}>
        <h1><b>Text Summary</b></h1>
        <p> {text.length} and {text.split(' ').length} </p>
        <p>Perview</p>
        <p>{text}</p>
    </div>
    </>
  )
}
