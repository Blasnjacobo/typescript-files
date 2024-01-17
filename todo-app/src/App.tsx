import React, { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType } from './types'

const mockTodos = [
  {
    id: '1',
    title: 'Conseguir trabajo',
    completed: true
  },
  {
    id: '2',
    title: 'Bailar macarena',
    completed: false
  },
  {
    id: '3',
    title: 'Trabajar',
    completed: false
  }
]

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = ({ id }:TodoId) : void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }
  // eslint-disable-next-line no-unused-vars
  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>
  ) : void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Todos
        todos={todos}
        onRemoveTodo={handleRemove}
        onTaggleCompleteTodo={handleCompleted}
      />
    </div>
  )
}

export default App
