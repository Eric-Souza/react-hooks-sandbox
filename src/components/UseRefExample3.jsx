import { useState } from 'react';
import Todo from './Todo';

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true);

  return (
    <div>
      <h1>useRef example 3 - memory leak fix</h1>
      {showTodo && <Todo />}
      <button onClick={() => setShowTodo(!showTodo)}>Toggle Todo</button>
    </div>
  );
}

export default UseRefExample3;
