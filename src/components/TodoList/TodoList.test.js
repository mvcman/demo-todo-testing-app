import { render, screen} from '@testing-library/react';
import TodoList from './TodoList';

const mocked = jest.fn();

test('Renders Todolist correctly!', () => {
    render(<TodoList todos={[{id: 1, title: 'demo'}]} deleteTodo={mocked} updateTodo={mocked} />);
    const list = screen.getAllByRole('list');
    expect(list.length).toBe(1);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems.length).toBe(1);
    expect(screen.getAllByRole('button').length).toBe(2);
});