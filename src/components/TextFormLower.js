// import React, {useState} from 'react'
// // import PropTypes from 'prop-types'




// export default function TextFormLower(props) {

//   const[text,setText]=useState(0)

//  const onclickLowercasebtn = ()=>{  
//   console.log("Lowercase is clicked")
//   let newText= text.toLowerCase();
//   setText(newText);
   
//  }

//  const handleonchange = (event)=>{

//   setText(event.target.value)

//  }
  
//   return (
//     <>
//     <div>
//       <h1>{props.title}</h1>
//       <textarea className='text' id='myBox' value={text} onChange={handleonchange} rows="4"></textarea>
//       <button className='btn btntype' id='btn_id' onClick={onclickLowercasebtn} >Convert to lowercase</button>
//       <p>{text.length}</p>
//     </div>
//     </>
//     // <div>
//     //   <p> hello {props.name}</p>
//     //   <h1>{props.title}</h1>
//     //   <p>{props.name} age is {props.age}</p>

//     // </div>
//   );
// }



// // TextFormLower.propTypes={
// //   name:PropTypes.string, title:PropTypes.string, age:PropTypes.string
// // }
