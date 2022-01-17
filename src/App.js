import React from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
// import {setTextInputing} from './store/actions/actions'

function App() {
  const dispatch = useDispatch()
  const textInputing = useSelector((state) => state.reducer)
  const todos = useSelector((state) => state.reducer)

  function textInput(e) {
    dispatch({
      type: 'ADD_TEXT_INPUTING',
      payload: textInputing(e.target.value),
    })
    console.log(textInputing);
    
  }

  // const [todos, setTodos] = React.useState([])
  // const [textInputing, setTextInputing] = React.useState('')
  // const [addValid, setAddValid] = React.useState(false)

  // useEffect(() => {
  //   if (textInputing === '') {
  //     setAddValid(false)
  //   }
  //   return () => {
  //     setAddValid(true)
  //   }
  // }, [addValid, textInputing])

  // function addTodo(e) {
  //   e.preventDefault()
  //   const inputedText = {
  //     text: textInputing,
  //     key: Date.now(),
  //     complited: false,
  //   }
  //   setTodos([...todos].concat(inputedText))
  //   console.log(todos)

  //   setTextInputing('')
  // }

  // function deleteTodo(key) {
  //   const deleteItem = [...todos].filter((item) => item.key !== key)
  //   setTodos(deleteItem)
  // }

  // function toggleComplete(key) {
  //   // eslint-disable-next-line
  //   const toggledTodo = [...todos].map((item) => {
  //     if (item.key === key) {
  //       item.complited = !item.complited
  //     }
  //     return item
  //   })
  //   setTodos(toggledTodo)
  // }

  // function changeValue(text, key) {
  //   const changedText = [...todos]
  //   // eslint-disable-next-line
  //   changedText.map((item) => {
  //     if (item.key === key) {
  //       item.text = text
  //     }
  //   })
  //   setTodos(changedText)
  // }

  return (
    <div className="App">
      <header>
        <form
          id="to-do-form"
          // onSubmit={addTodo}
        >
          <input
            type="text"
            placeholder="Add a todo"
            value={textInputing.text}
            onChange={(e) =>textInput(e.target.value)}
          />
          <button
            // disabled={!addValid}
            type="submit"
          >
            Add todo
          </button>
        </form>
      </header>
      <div>
        {todos.length ? (
          todos.map((todo) => {
            const classes = []
            if (todo.complited) {
              classes.push('done')
            }
            return (
              <div className="list" key={todo.key}>
                <p>
                  <input
                    id="check"
                    // onChange={() => toggleComplete(todo.key)}
                    type="checkbox"
                  />
                  <input
                    id="text"
                    type="text"
                    className={classes.join(' ')}
                    // onChange={(e) => changeValue(e.target.value, todo.key)}
                    // value={todo.text}
                  />
                  <span
                    // onClick={() => deleteTodo(todo.key)}
                    style={{ cursor: 'pointer' }}
                  >
                    [x]
                  </span>
                </p>
              </div>
            )
          })
        ) : (
          <div>
            <h1 style={{ color: 'white' }}>No todos</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
