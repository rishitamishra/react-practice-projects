import { useState } from 'react';
import { useTodo } from './context/TodoContext';
import TodoItem from './components/TodoItem';

function App() {
  const [text, setText] = useState('');
  const { todos, addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== '') {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-indigo-100 via-purple-100 to-pink-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">📝 Todo App</h1>

        <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Add a task"
            className="flex-1 p-2 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Add
          </button>
        </form>

        <ul className="space-y-3">
          {todos.length === 0 ? (
            <p className="text-center text-gray-500">No tasks yet. Start by adding one!</p>
          ) : (
            todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
