import { Link } from "react-router-dom";
import Todo from "../components/Todo";
const Home = (props) => {
  return (
    <div className="homepage">
      <Link to="/AddTodo">Add todo</Link>
      <div>
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
