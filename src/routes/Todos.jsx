import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../features/todos/todoSlice";

const Todos = () => {
  const dispatch = useDispatch();

  const { todos } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      <h1>MERN Todos</h1>
      {todos.map((todo) => (
        <li key={todo.id}>
          <img src={todo.image} width="100" />
          <h2>{todo.title}</h2>
          <p>{todo.description}</p>
        </li>
      ))}
    </div>
  );
};

export default Todos;
