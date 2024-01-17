import React from 'react'
import { type ListOfTodos, TodoId, type Todo as TodoType } from '../types/types'
import { Todo } from './Todo'

interface Props {
    todos: ListOfTodos
    onRemoveTodo: ({ id }: TodoId) => void
    onTaggleCompleteTodo: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

// Es una forma de pasarle parametros a los tipos:
// Tipo especial que tiene React: Functional Component, y puede tomar cualquier forma, y aqui se le indica que es de forma Props
export const Todos: React.FC<Props> = ({ todos, onRemoveTodo, onTaggleCompleteTodo }) => {
  return (
    <ul className='todo-list'>
      {todos.map(todo => (
        <li key={todo.id} className={`${todo.completed ? 'completed' : ''}`}>
          <Todo
            key={todo.id}
            id={todo.id}
            title={todo.title}
            completed={todo.completed}
            onRemoveTodo={onRemoveTodo}
            onToggleCompleteTodo={onTaggleCompleteTodo}
          />
        </li>
      ))}
    </ul>
  )
}
