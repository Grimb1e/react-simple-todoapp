import { useState, ChangeEvent } from "react";

type TodoType = {
  id: number;
  value: string;
};

export const TodoList = () => {
  const [task, setTask] = useState<string>("");
  const [todoList, setTodoList] = useState<TodoType[]>([]);

  const removeTask = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== "") {
      setTodoList((prev) => [...prev, { id: Date.now(), value: task }]);
      setTask("");
    }
  };
  return (
    <div className="container">
      <div className="input-container">
        <input type="text" value={task} onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      {todoList.map((item) => (
        <div key={item.id} className="task-item">
          <span>{item.value}</span>
          <button onClick={() => removeTask(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
