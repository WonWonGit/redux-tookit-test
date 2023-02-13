import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  fetchTodoList,
  ITodoProps,
  todoListSelect,
  TodoStatus,
  updateTodoList,
} from "./todoSlice";

const Todos = () => {
  const todos = useAppSelector(todoListSelect);
  const dispatch = useAppDispatch();
  const [newTodo, setNewTodo] = useState("");

  const createNewTodo = () => {
    const data: ITodoProps = {
      id: todos.length + 1,
      todo: newTodo,
      todoStatus: TodoStatus.INCOMPELETED,
    };

    dispatch(updateTodoList(data));
    setNewTodo("");
  };

  useEffect(() => {
    dispatch(fetchTodoList());
  }, [dispatch]);

  return (
    <div>
      <div>
        <input
          value={newTodo}
          onChange={(event) => {
            setNewTodo(event.target.value);
          }}
        />
        <button
          onClick={() => {
            createNewTodo();
          }}
        >
          add
        </button>
      </div>
      <div>
        {todos.map((todo: ITodoProps, number) => (
          <div key={number}>{todo.todo}</div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
