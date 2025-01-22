import React from "react";
import AddTodo from "./comp/AddTodo";
import Todos from "./comp/Todos";

function App() {
    return (
        <>
            <h1 className="text-center text-3xl font-bold mt-8">Learn Redux Toolkit</h1>
            <div className="mt-8">
                <AddTodo />
            </div>
            <div className="mt-8">
                <Todos />
            </div>
        </>
    );
}

export default App;
