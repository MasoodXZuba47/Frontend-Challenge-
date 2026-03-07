// Simple React Website with Hooks
const { useState, useEffect } = React;

// Counter Component with useState
function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="counter-section">
            <h2>Counter (useState Hook)</h2>
            <div className="counter-display">{count}</div>
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
                Increment
            </button>
            <button className="btn btn-secondary" onClick={() => setCount(count - 1)}>
                Decrement
            </button>
            <button className="btn" style={{background: '#ff6b6b', color: 'white'}} onClick={() => setCount(0)}>
                Reset
            </button>
        </div>
    );
}

// Todo Component with useState
function TodoList() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Learn React', completed: false },
        { id: 2, text: 'Build a project', completed: false }
    ]);
    const [inputValue, setInputValue] = useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTodo = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="todo-section">
            <h2>Todo List (useState Hook)</h2>
            <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                <input 
                    type="text" 
                    className="todo-input"
                    placeholder="Add a new task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                />
                <button className="btn btn-primary" onClick={addTodo}>
                    Add
                </button>
            </div>
            <ul className="todo-list">
                {todos.map(todo => (
                    <li key={todo.id} className="todo-item">
                        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                            {todo.text}
                        </span>
                        <div>
                            <button className="toggle-btn" onClick={() => toggleTodo(todo.id)}>
                                {todo.completed ? 'Undo' : 'Done'}
                            </button>
                            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// Clock Component with useEffect
function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // Cleanup function
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#f0f0f0', borderRadius: '10px' }}>
            <h3>Live Clock (useEffect Hook)</h3>
            <p style={{ fontSize: '1.5rem', color: '#667eea', fontWeight: 'bold' }}>
                {time.toLocaleTimeString()}
            </p>
            <p style={{ color: '#666' }}>
                {time.toLocaleDateString()}
            </p>
        </div>
    );
}

// Main App Component
function App() {
    return (
        <div className="container">
            <h1>React Basics Demo</h1>
            <p style={{ color: '#666', marginBottom: '1rem' }}>
                A simple website demonstrating React hooks
            </p>
            <Counter />
            <TodoList />
            <Clock />
        </div>
    );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
