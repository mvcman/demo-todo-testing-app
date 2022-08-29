import { render, screen, fireEvent } from '@testing-library/react';
import TodoApp from './Todo';

// const mocked = jest.fn();

test('Renders header correctly!', () => {
    render(<TodoApp />);
    const headerElement = screen.getByText(/welcome to my todo app/i);
    expect(headerElement).toBeInTheDocument();
    const descriptionElement = screen.getByText(/This is a simple todo app to keep the track of your todos/i);
    expect(descriptionElement).toBeInTheDocument();
});

test('Input box work correctly!', () => {
    render(<TodoApp />);
    const inputElement = screen.getAllByPlaceholderText('type something');
    const list = screen.getAllByRole('list');
    expect(list.length).toBe(1);
    expect(inputElement.length).toBe(1);

    fireEvent.change(inputElement[0], { target: { value: 'demo' }});
    expect(inputElement[0].value).toBe('demo');

    fireEvent.submit(screen.getByTestId('form'));
    expect(inputElement[0].value).toBe('');

    const listitem = screen.getAllByRole('listitem');
    expect(listitem.length).toBe(1);
    const updateBtn = screen.getAllByTestId('update');
    fireEvent.click(updateBtn[0]);
    expect(listitem[0]).toHaveTextContent(/demo2/i);

    const deleteBtn = screen.getAllByTestId('delete');
    fireEvent.click(deleteBtn[0]);
    expect(screen.getAllByRole('list')[0].childElementCount).toBe(0);
});

test('Submit without entering any text in textfield', () => {
    render(<TodoApp />);
    const inputElement = screen.getAllByPlaceholderText('type something');
    fireEvent.change(inputElement[0], { target: { value: '' }});
    fireEvent.submit(screen.getByTestId('form'));
    const popup = screen.getByTestId('alertbox');
    expect(popup).toBeInTheDocument();
    expect(popup).toHaveTextContent(/failed/i);
});

// test('Edit without entering any text in textfield', () => {
//     render(<TodoApp />);
//     const updateBtn = screen.getAllByTestId('update');
//     fireEvent.click(updateBtn[0]);
//     expect(popup).toHaveTextContent(/failed/i);
// });

// test('When click on delete button it will remove todo from list', () => {
//     render(<TodoApp />);
//     const inputElement = screen.getAllByPlaceholderText('type something');
//     fireEvent.change(inputElement[0], { target: { value: 'demo' }});
//     fireEvent.submit(screen.getByTestId('form'));
//     const deleteBtn = screen.getByTestId('delete');
//     fireEvent.click(deleteBtn);
//     const list = screen.getByRole('list');
//     expect(list.length).toBe(3);
// });