import React, {useState} from "react"
import { FaPlusCircle } from "react-icons/fa"
 const InputTodo = props => {
  const [title, setTitle] = useState("")

  const onChange = e => {
    setTitle(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (title.trim()) {
      props.addTodoProps(title)
      setTitle("")
    } else {
      alert("Please write item")
    }
  }
 
  return (
      <form onSubmit={handleSubmit} className="form-container">
          <input
            type="text"
            className="inpu-text"
            placeholder="Add todo..."
            value={title}
            name="title"
            onChange={onChange}
          />
          <button className="input-submit">
            <FaPlusCircle/>
          </button>
      </form>
  )

 }
// const InputTodo = props => {
//     const [inputText, setInputText] = useState({
//         fName: "",
//         lastName: "",
//     })

//     const onChange = e => {
//         setInputText({
//             ...inputText, 
//             [e.target.name]: e.target.value,
//         })
//     }

//     const handleSubmit = e => {
//         e.preventDefault()
//         console.log("submitted")
//     }

//     return (
//         <>
//             <form onSubmit={handleSubmit} className="form-container">
//                 <input
//                     type="text"
//                     className="input-text"
//                     placeholder="Add first Name"
//                     value={inputText.fName}
//                     name="fName"
//                     onChange={onChange}/>            

//                 <input
//                     type="text"
//                     className="input-text"
//                     placeholder="Add last name"
//                     value={inputText.lastName}
//                     name="lastName"
//                     onChange={onChange}
//                 />

//                 <button className="input-submit">Submit</button>
//             </form>
//             <h2>{inputText.fName}</h2>
//             <h2>{inputText.lastName}</h2>
//         </>
//     )
// }
export default InputTodo