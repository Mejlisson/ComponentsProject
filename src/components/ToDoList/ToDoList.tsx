import "./ToDoList.scss";
import { useEffect, useState } from "react";
import plantGif from "./plant.gif";

type Todo = {
    id: number;
    text: string;
    completed: boolean; 
};

const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [input, setInput] = useState<string>("");

    useEffect(() => {
        const savedTodos = localStorage.getItem("todos");
        if (savedTodos) {
            setTodos(JSON.parse(savedTodos));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = () => {
        if (input.trim() !== "") {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]); // ✅ Initialisera "completed" som false
            setInput("");
        }
    };

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="todo-container">
            <h1>TO DO LIST</h1>
            <input
                className="input"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button className="add-button" onClick={addTodo}>
                Lägg till
            </button>
            <ul className="Lista">
                {todos.map((todo) => (
                    <li className={`todo-list ${todo.completed ? "completed" : ""}`} key={todo.id} onClick={() => toggleTodo(todo.id)}>
                        <span className="todo-text">{todo.text}</span>
                        <button className="delete-button" onClick={(e) => { e.stopPropagation(); removeTodo(todo.id); }}>
                            Ta bort
                        </button>
                    </li>
                ))}
            </ul>
            <img src={plantGif} alt="plant" className="plant"/>
        </div>
    );
};

export default TodoList;