import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoExample1() {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  const sqrt = useMemo(() => getSqrt(number), [number]);

  const renders = useRef(1);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  const onClick = () => {
    setInc((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>useMemo example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <h2>
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick}>Re Render</button>
      <h3>renders: {renders.current}</h3>
    </div>
  );
}

function getSqrt(n) {
  for (let i = 0; i <= 10000; i++) {
    console.log(i);
  }

  return Math.sqrt(n);
}

export default UseMemoExample1;
