import { useState, useEffect, useRef } from 'react';

function UseRefExample2() {
  const [name, setName] = useState('');

  const renders = useRef(1);
  const prevName = useRef('');

  useEffect(() => {
    renders.current = renders.current + 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>useRef example 2 - prev state</h1>
      <h3>renders: {renders.current}</h3>
      <h3>prevName state: {prevName.current}</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}

export default UseRefExample2;
