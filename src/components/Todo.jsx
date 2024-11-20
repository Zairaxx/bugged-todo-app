const Todo = (props) => {
    return (
      <li>
        <div className={props.data.completed ? "completed" : ""}>
          <strong>
            {" "}
            #{props.index + 1 + " "}
            {props.todo}
          </strong>
          <button
            onClick={() => {
              props.completeTodo(props.index);
            }}
          >
            Complete
          </button>
        </div>
      </li>
    );
  };
  
  export default Todo;
  