import { Link } from "react-router-dom";
import Todo from "../components/Todo";
const Home = (props) => {
  return (
    <div className="homepage">
      <Link to="/AddTodo">Add todo</Link>
      <div>
        <h2>Todo-list</h2>
        <ul>
          {props.todos.map((todo, i) => {
              <Todo
                key={i}
                data={todo}
                index={i}
                completeTodo={props.completeTodo}
              />
          })}
        </ul>
      </div>
    </div>
  );
};

export default Home;
