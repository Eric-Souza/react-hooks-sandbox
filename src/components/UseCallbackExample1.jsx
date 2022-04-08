import React, { useState, useCallback } from 'react';

function UseCallbackExample1() {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(() => {
    setTasks((prevState) => [...prevState, 'New Task']);
  }, [setTasks]);

  return (
    <div>
      <h1>useCallback example</h1>

      <Button addTask={addTask} />

      {tasks.map((task, index) => (
        <p key={index}>{task}</p>
      ))}
    </div>
  );
}

const Button = React.memo(({ addTask }) => {
  console.log('Button rendered');

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
    </div>
  );
});

export default UseCallbackExample1;
