import { useState } from 'react';
import { useTodo } from '../context/TodoContext';

function TodoItem({ todo }) {
  const { toggleComplete, deleteTodo, editTodo } = useTodo();
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing && newText.trim() !== '') {
      editTodo(todo.id, newText);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li className="flex justify-between items-center bg-white rounded shadow p-3 mb-2 hover:bg-gray-50 transition">
      {isEditing ? (
        <input
          className="flex-1 border p-1 rounded mr-2"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`flex-1 cursor-pointer ${
            todo.completed ? 'line-through text-gray-400' : ''
          }`}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.text}
        </span>
      )}

      <div className="flex items-center gap-2 ml-2">
        <button
          onClick={handleEdit}
          className="text-blue-500 hover:text-blue-700 text-sm"
        >
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-700 text-sm"
        >
          ❌
        </button>
      </div>
    </li>
  );
}

export default TodoItem;
