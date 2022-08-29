import React from 'react';
import Header from '../Header/Header';
import InputBox from '../Input/Input';
import TodoList from '../TodoList/TodoList';

const TodoApp = () => {
    const [input, setInput] = React.useState('');
    const [todos, setTodos] = React.useState([]);
    const [alert, setAlert] = React.useState({
        popup: false,
        message: ''
    });

    const Alert = ({ message }) => {
        return (
            <div data-testid="alertbox" style={{ height: 40, position: 'fixed', right: 50, top: 100, background: '#000', color: '#fff', display: 'flex', alignItems: 'center', padding: 10}}>
                <p>{message}</p> <button onClick={() => setAlert({
                    popup: false,
                    message: ''
                })}>Close</button>
            </div>
        )
    }
    
    const addTodo = () => {
        try {
            if (input === '') {
                throw new Error('Please type something!');
            }
            const obj = {
                id: todos.length + 1,
                title: input,
            }
            setTodos((prev) => [...prev, obj]);
            setInput('');
        } catch (err) {
            setAlert({
                popup: true,
                message: 'failed',
            });
            return err;
        }
    }

    const updateTodo = (id, title) => {
        try {
            if (todos.find(t => t.id === id) === undefined) {
                throw new Error('You don\'t have this todo');
            }
            setTodos((prev) => [...prev.filter(t => t.id !== id), {
                id: id,
                title: title
            }])
        } catch(err) {
            setAlert({
                popup: true,
                message: 'update failed',
            });
            return err;
        }
    }

    const deleteTodo = (id) => {
        try {
            setTodos((prev) => prev.filter((t) => t.id !== id))
        } catch(err) {
            setAlert({
                popup: true,
                message: 'failed',
            });
        }
    }

    return (
        <>
        {alert.popup && <Alert message={alert.message} />}
        <div>
            <Header title="Welcome to my todo app" description="This is a simple todo app to keep the track of your todos" />
            <InputBox value={input} setValue={setInput} addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        </div>
        </>
    )
}

export default TodoApp;