const Todo = (props) => {
  console.log(props);
    return (
      <li>
        <div className={props.data.completed ? "completed" : ""}>
          <strong> #{props.index + 1} {props.data.todo}</strong>
          
          { !props.data.completed &&
            <button onClick={() => {props.completeTodo(props.index);}}>
              Complete
            </button>
          }

        </div>
      </li>
    );
  };
  
  export default Todo;
  