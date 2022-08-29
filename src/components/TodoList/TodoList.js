const TodoList = ({ todos, deleteTodo, updateTodo }) => {
    return (
        <ul>
            {todos.map((t, i) => <li key={i}>{t.title}<button onClick={() => deleteTodo(t.id)} data-testid="delete">delete</button><button onClick={() => updateTodo(t.id, 'demo2')} data-testid="update">update</button></li>)}
        </ul>
    )
}

export default TodoList;
