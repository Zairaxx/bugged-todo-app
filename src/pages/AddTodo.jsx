import { Link } from "react-router-dom";

const AddTodo = (props) => {
  return (
    <>
      <Link to="/">Home</Link>
      <br />
      <input
        type="text"
        id="todoInput"
        placeholder="What do you need to do today?"
      />
      <button onClick={props.addTodo}>Add todo</button>
    </>
  );
};

export default AddTodo;
