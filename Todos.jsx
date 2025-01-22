import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-white text-2xl mb-4">Todos</div>
            <ul className="list-none">
                {todos.length === 0 ? (
                    <div className="text-gray-400 mt-4">No Todos Found</div>
                ) : (
                    todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-gray-800 px-4 py-2 rounded"
                            key={todo.id}
                        >
                            <div className="text-white">{todo.text}</div>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 px-3 py-1 rounded"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </li>
                    ))
                )}
            </ul>
        </>
    );
}

export default Todos;
