import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { setTextInputing, setTodos, setAddValid } from './store/actions/actions'

function App() {
  const dispatch = useDispatch()
  const addTask = useSelector((state) => state.reducer.textInputing)
  const todos = useSelector((state) => state.reducer.todos)
  const addValid = useSelector((state) => state.reducer.addValid)

  //* ввод текста в input
  function textInput(text) {
    dispatch(setTextInputing(text))
    console.log(addTask)
  }

//*добавление задачи в список
  function onFormSubmit(e) {
    e.preventDefault()
    let inputedText = {
      text: addTask,
      key: Date.now(),
      complited: false,
    }
    dispatch(setTodos(todos.concat(inputedText)))
    dispatch(setTextInputing(''))
    console.log(todos, addTask)
  }

  //*редактирование текста в списке задач
  function changeText(text, key) {
    const newText = [...todos]
    newText.map((todo) => {
      if (todo.key === key) {
        todo.text = text
      }
      return newText
    })
    dispatch(setTodos(newText))
  }

  //* удаление задачи из списка
  function deleteTodo(key) {
    const deleteItem = [...todos].filter((item) => item.key !== key)
    dispatch(setTodos(deleteItem))
  }
  //* флаг при выполнении задачи (текст зачеркивается)
  function toggleComplete(key) {
    const todoComplited = [...todos].map((item) => {
      if (item.key === key) {
        item.complited = !item.complited
      }
      return item
    })
    dispatch(setTodos(todoComplited))
  }

  //*кнопка отправки будет не валидна пока input пустой
  useEffect(() => {
    if (addTask === '' || addTask.trim() === '') {
      dispatch(setAddValid(false))
    }
    return () => {
      dispatch(setAddValid(true))
    }
  }, [addValid, addTask])

  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={onFormSubmit}>
          <input
            placeholder="Add a todo"
            value={addTask.text}
            onChange={(e) => textInput(e.target.value)}
          />
          <button disabled={!addValid} type="submit">
            Add todo
          </button>
        </form>
      </header>
      <div>
        {todos && todos.length ? (
          todos.map((todo) => {
            const lineThrough = []
            if (todo.complited) {
              lineThrough.push('done')
            }
            return (
              <div key={todo.key}>
                <p>
                  <input
                    onChange={() => toggleComplete(todo.key)}
                    type="checkbox"
                  />
                  <input
                    className={lineThrough.join(' ')}
                    value={todo.text}
                    onChange={(e) => changeText(e.target.value, todo.key)}
                  />
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() => deleteTodo(todo.key)}
                  >
                    &times;
                  </span>
                </p>
              </div>
            )
          })
        ) : (
          <div>
            <h1>no todos</h1>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
