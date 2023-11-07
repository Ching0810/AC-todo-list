import TodoItem from './TodoItem';

const TodoCollection = ({todos , onToggleDone, onSave, onDelete, onChangeMode}) => {
  return (
    <div>
      {todos.map(todo=>{
        return <TodoItem 
          key={todo.id} 
          todo={todo} 
          onSave={({id,title })=>onSave?.({id,title})}
          // onToggleDone prop could receive any type of data, it receive a function who receive a id as argument in this case
          // therefore what argument name for the function does not matter
          // each TodoItem need to know which todo it is, therefore id is necessary for it
          onToggleDone={(id)=>{
            onToggleDone?.(id)
          }}
          onChangeMode={({id, isEdit})=>{
            onChangeMode({id, isEdit})
          }}
          onDelete={({id})=>{
            onDelete({id})
          }}
        />
      })}
    </div> 
  );
};

export default TodoCollection;
