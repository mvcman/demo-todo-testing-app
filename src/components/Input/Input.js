import React from 'react';

const InputBox = ({ value, setValue, addTodo }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo();
    }
    return (
        <form onSubmit={handleSubmit} data-testid="form">
            <input placeholder='type something' value={value} onChange={(e) => setValue(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    )
}

export default InputBox