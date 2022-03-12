import React, { useState, useEffect } from "react"
import Header from "./Header"
import InputTodo from "./InputTodo"
import TodosList from "./TodosList"
import { v4 as uuidv4 } from "uuid"
import { Route, Routes } from "react-router-dom"
import About from "../Pages/About"
import NoMatch from "../Pages/NoMatch"
import NavBar from "./Navbar"
// https://jsonplaceholder.typicode.com/todos [JSONPlaceholder todos dummy data endpoint]
const TodoContainer = () => {
  
  const [todos, setTodos] = useState(getInitialTodos())



  function getInitialTodos() {
    const temp = localStorage.getItem("todos");
    const savedTodos = JSON.parse(temp)
    return savedTodos || []
  }
  // useEffect(() => {
  //   const temp = localStorage.getItem("todos")
  //   const loadedTodos = JSON.parse(temp)

  //   if (loadedTodos) {
  //     setTodos(loadedTodos)
  //   }
  // }, [setTodos])

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos])
 

  const handleChange = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

  const delTodo = id => {
    setTodos([
      ...todos.filter(todo => {
        return todo.id !== id
      }),
    ])
  }

  const addTodoItem = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo
      })
    )
  }

  return (
    <>
    <NavBar />
    <Routes>
        <Route  path="/"
        element={
          <div className="container">
          <div className="inner">
            <Header />
            <InputTodo addTodoProps={addTodoItem} />
            <TodosList
              todos={todos}
              handleChangeProps={handleChange}
              deleteTodoProps={delTodo}
              setUpdate={setUpdate}
            />
          </div>
        </div>
        }>
          
        </Route>
        <Route path="/about/*" element={<About />}>
          {/* <About /> */}
        </Route>
      
      </Routes>
      </>
  )
}
export default TodoContainer


//**************************************************** */
// import React, { useState } from "react"
// import Header from "./Header"
// import InputTodo from "./InputTodo"
// import TodosList from "./TodosList"
// import { v4 as uuidv4 } from "uuid"

// const TodoContainer = () => {
//   const [todos, setTodos] = useState([])

//   const handleChange = id => {
//     setTodos(prevState =>
//       prevState.map(todo => {
//         if (todo.id === id) {
//           return {
//             ...todo,
//             completed: !todo.completed,
//           }
//         }
//         return todo
//       })
//     )
//   }

//   const delTodo = id => {
//     setTodos([
//       ...todos.filter(todo => {
//         return todo.id !== id
//       }),
//     ])
//   }

//   const addTodoItem = title => {
//     const newTodo = {
//       id: uuidv4(),
//       title: title,
//       completed: false,
//     }
//     setTodos([...todos, newTodo])
//   }

//   const setUpdate = (updatedTitle, id) => {
//     setTodos(
//       todos.map(todo => {
//         if (todo.id === id) {
//           todo.title = updatedTitle
//         }
//         return todo
//       })
//     )
//   }

//   return (
//     <div className="container">
//       <div className="inner">
//         <Header />
//         <InputTodo addTodoProps={addTodoItem} />
//         <TodosList
//           todos={todos}
//           handleChangeProps={handleChange}
//           deleteTodoProps={delTodo}
//           setUpdate={setUpdate}
//         />
//       </div>
//     </div>
//   )
// }

// export default TodoContainer