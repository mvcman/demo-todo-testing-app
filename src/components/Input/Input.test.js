import { render, screen, fireEvent } from '@testing-library/react';
import InputBox from './Input';

const mocked = jest.fn();

test('Renders title correctly!', () => {
    render(<InputBox value="demo" setValue={mocked} addTodo={mocked} />);
    const inputElement = screen.getAllByPlaceholderText('type something');
    expect(inputElement.length).toBe(1);
    expect(inputElement[0].value).toBe('demo');
});

test('Onchanges event of input box', () => {
    render(<InputBox setValue={mocked} addTodo={mocked} />);
    const inputElement = screen.getAllByPlaceholderText('type something');
    fireEvent.change(inputElement[0], { target: { value: 'Congratulations...' } });
    // fireEvent.submit(screen.getByTestId('form'));
    expect(inputElement[0].value).toBe('Congratulations...');

});

test('submit event of input box button', () => {
    render(<InputBox setValue={mocked} addTodo={mocked} />);
    const inputElement = screen.getAllByPlaceholderText('type something');
    fireEvent.change(inputElement[0], { target: { value: 'Congratulations...' } });
    fireEvent.submit(screen.getByTestId('form'));
    expect(inputElement[0].value).toBe('Congratulations...');
});