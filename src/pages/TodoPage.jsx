import { createTodo, deleteTodo, getTodos, patchTodo } from 'api/todos';
import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useEffect, useState } from 'react';

// const dummyTodos = [
//   {
//     title: 'Learn react-router',
//     isDone: true,
//     id: 1,
//   },
//   {
//     title: 'Learn to create custom hooks',
//     isDone: false,
//     id: 2,
//   },
//   {
//     title: 'Learn to use context',
//     isDone: true,
//     id: 3,
//   },
//   {
//     title: 'Learn to implement auth',
//     isDone: false,
//     id: 4,
//   },
// ];

const TodoPage = () => {
  const [inputeValue, setInputValue] = useState('')
  const [todos, setTodos] = useState([])
  const [count, setCount] = useState(todos.length)
  const handleChange = (value) => {
    setInputValue(value)
  }

  const handleAddTodo = async () => {
    if(inputeValue.length===0) {
      return
    }
    try{
      const data = await createTodo({
        title: inputeValue,
        isDone: false
      })
      setTodos(prevTodos=> {
        const newTodos = [...prevTodos, 
        {
          id: data.id,
          title: data.title,
          isDone: data.isDone,
          isEdit: false 
        }];
        setCount(count+1);
        return newTodos;
      })
      setInputValue('')
    }catch(error){
      console.error(error)
    }
  }

  const handleKeyDown = async() => {
    if(inputeValue.length===0) {
      return
    }
    try{
      const data = await createTodo({
        title: inputeValue,
        isDone: false
      })
      setTodos(prevTodos=> {
        const newTodos = [...prevTodos, 
        {
          id: data.id,
          title: data.title,
          isDone: data.isDone,
          isEdit: false 
        }];
        setCount(count+1);
        return newTodos;
      })
      setInputValue('')
    }catch(error){
      console.error(error)
    }
  }

  // what argument name does not matter for handleToggleDone function received
  const handleToggleDone = async (id) => {

    const currentTodo = todos.find(todo=>todo.id === id)
    try{
      await patchTodo({
        id,
        isDone: !currentTodo.isDone
      })
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
    }catch(error){
      console.error(error)
    }
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
  const handleSave = async({id,title}) => {
    try{
      await patchTodo({
        id,
        title
      })
      setTodos(prevTodos=>{
        const newTodos =  prevTodos.map(todo=>{
          if(todo.id === id) {
            return {
              ...todo,
              title,
              isEdit:false
            }
          }
          return todo
        })
        return newTodos
      })
    }catch(error){
      console.error(error)
    }
    
  }
  const handleDelete = async ({id}) => {
    try{
      await deleteTodo(id)
      setTodos(prevTodos=>{
        const newTodos = prevTodos.filter(todo => todo.id !== id)
        setCount(count-1)
        return newTodos
      })
    }catch(error){
      console.error(error)
    }
  }

  useEffect(()=>{
    const getTodosAsync = async ()=>{
      try{
        const todos = await getTodos()

        setTodos(todos.map(todo=>({...todo, isEdit: false})))
        setCount(todos.length)
      }catch(error){
        console.error(error)
      }
    }
    getTodosAsync()
  }, [])

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
      <Footer count={count}/>
    </div>
  );
};

export default TodoPage;
