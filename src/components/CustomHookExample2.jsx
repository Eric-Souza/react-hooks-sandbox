import useLocalStorage from '../hooks/useLocalStorage';

function CustomHookExample2() {
  const [task, setTask] = useLocalStorage('task', '');
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
  };

  return (
    <div>
      <h1>custom hook example 2 - useLocalStorage</h1>

      <form onSubmit={onSubmit}>
        <div>
          <label>Task</label>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      <hr />

      {tasks.map((task) => (
        <h3 key={task.date}>{task.task}</h3>
      ))}
    </div>
  );
}

export default CustomHookExample2;
