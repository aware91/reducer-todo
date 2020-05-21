import React, { useState } from "react";

const TodoForm = ({ dispatch }) => {
    const [title, setTitle] = useState("");
    const [curTag, setCurTag] = useState("");
    const [tags, setTags] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD-TODO", title, tags });
        setTitle("");
        setTags([]);
    };

    const handleClear = () => {
        dispatch({ type: "CLEAR-COMPLETE" });
    };

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Add Todo Item"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <button type="submit">Submit Todo</button>
        </form>        
        <button onClick={handleClear}>Clear Completed</button>
        </div>
    );
};

export default TodoForm;