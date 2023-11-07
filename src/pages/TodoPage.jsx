import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputeValue, setInputValue] = useState('')
  const [todos, setTodos] = useState(dummyTodos)
  const handleChange = (value) => {
    setInputValue(value)
  }

  const handleAddTodo = () => {
    if(inputeValue.length===0) {
      return
    }
    setTodos(prevTodos=> {
      return [...prevTodos, 
      {
        id: Math.random()*100,
        title: inputeValue,
        isDone: false
      }]
    })
    setInputValue('')
  }

  const handleKeyDown = () => {
    if(inputeValue.length===0) {
      return
    }
    setTodos(prevTodos=> {
      return [...prevTodos, 
      {
        id: Math.random()*100,
        title: inputeValue,
        isDone: false
      }]
    })
    setInputValue('')
  }

  // what argument name does not matter for handleToggleDone function received
  const handleToggleDone = (id) => {
    setTodos((prevTodos)=>{
      return prevTodos.map(todo=>{
        if(todo.id === id) {
          return {
            ...todo,
            isDone:!todo.isDone
          }
        }
        return todo
      })
    })
  }

  const handleDoubleClick = ({id, isEdit})=>{
    setTodos((prevTodos)=>{
      return prevTodos.map((todo)=>{
        if (todo.id === id) {
          return {
            ...todo,
            isEdit
          }
        }
        return {...todo, isEdit:false}
      })
    })
  }
  const handleSave = ({id,title}) => {
    setTodos(prevTodos=>{
      return prevTodos.map(todo=>{
        if(todo.id === id) {
          return {
            ...todo,
            title,
            isEdit:false
          }
        }
        return todo
      })
    })
  }
  const handleDelete = ({id}) => {
    setTodos(prevTodos=>{
      return prevTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <div>
      TodoPage
      <Header />
      {/* onChangeFunc is a props with setInputValue function */}
      <TodoInput 
        inputValue={inputeValue} 
        onChangeFunc={handleChange} 
        onAddTodo={handleAddTodo} 
        onKeyDown={handleKeyDown}
      />
      <TodoCollection 
        todos={todos}
        onToggleDone={handleToggleDone}
        onChangeMode={handleDoubleClick}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default TodoPage;
