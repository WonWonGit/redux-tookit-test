import { ITodoProps } from "./todoSlice";

const fetchTodoList = async (): Promise<ITodoProps[]> => {
  const result = fetch("http://localhost:3001/todo");
  return await (await result).json();
};

const addTodoList = async (data: ITodoProps): Promise<ITodoProps> => {
  const result = fetch("http://localhost:3001/todo", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await (await result).json();
};

export { fetchTodoList, addTodoList };
