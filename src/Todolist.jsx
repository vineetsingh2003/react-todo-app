
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import "./Todolist.css";

function Todolist(){
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    function add(){
        const text = newTodo.trim();
        if (!text) return;

        setTodos(prev => [...prev, {task: text, id: uuidv4()}]);
        setNewTodo("");
    }

    function remove(id){
        setTodos((prev) => 
            prev.filter((todo) =>
                todo.id !== id
            )
        );
    }

    function onKeyDown(event){
        if (event.key === "Enter") add();
    }

    return(
        <div>
            <h1>Todo List</h1>

            <input
                type="text"
                placeholder="Add Task and press Enter or click Add"
                value={newTodo}
                onChange={event => setNewTodo(event.target.value)}
                onKeyDown={onKeyDown}
            />
            <button onClick={add}>Add</button>

            <hr />

            <h4>Tasks to Do:</h4>
            {todos.length === 0 ? (
                <div>No tasks</div>
            ) : (
                <ol>
                    {todos.map(({task, id}) => (
                        <li key={id}>
                            {task}{" "}
                            <button onClick={() => remove(id)}>Remove</button>
                        </li>
                    ))}
                </ol>
            )}
        </div>
    );
}

export default Todolist;
