import { useState, useEffect } from 'react';

const API_BASE = "http://localhost:3001"

function App() {
    const [todos, setTodos] = useState([]);
    const [popupActive, setPopupActive] = useState(false);
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        getTodos();
    }, []);

    const getTodos = () => {
        fetch(API_BASE + "/todos")
            .then(res => res.json())
            .then(data => setTodos(data))
            .catch(err => console.log("Error: ", err));
    }

    const completeTodo = async (todoId) => {
        const data = await fetch(API_BASE + "/todo/complete/" + todoId, {method: "PUT"})
            .then(res => res.json());

        setTodos(todos => todos.map(todo => {
            if (todo._id === data._id) todo.complete = data.complete;
            
            return todo;
        }))
    }

    const deleteTodo = async (todoId) => {
        const data = await fetch(API_BASE + "/todo/delete/" + todoId, {method: "DELETE"})
            .then(res => res.json());

        setTodos(todos => todos.filter(todo => todo._id !== data._id))
    }

    return (
		<div className="App">
            <h1>Welcome, Nik</h1>
            <h4>Your stuff</h4>
            
            <div className="todos">
                {todos.map(todo => (
                    <div 
                        className={"todo " + (todo.complete ? "is-complete" : "")} 
                        key={todo._id}
                        onClick={() => completeTodo(todo._id)}
                    >
                        <div className="checkbox"></div>
                        <div className="text">{todo.text}</div>
                        <div className="delete-todo" onClick={() => deleteTodo(todo._id)}>x</div>
                    </div>
                ))}
            </div>
        </div>
	);
}

export default App;