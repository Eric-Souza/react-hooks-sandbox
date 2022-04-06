import { useRef } from 'react';

/**
 * inputRef gets an object containing all info regarding the specified ref
 * inputRef.current.value gets current value
 * inputRef.current.style gets current style
 * To pass default value, use: const ref = useRef(defaultValue)
 */

function UseRefExample1() {
  const inputRef = useRef();
  const paragraphRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();

    inputRef.current.value = 'Hello';
    inputRef.current.style.backgroundColor = 'red';
    paragraphRef.current.innerText = 'Goodbye';
  };

  return (
    <div>
      <h1>useRef example 1- create DOM ref</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" ref={inputRef} id="name" />
        <button type="submit">Submit</button>

        <p onClick={() => inputRef.current.focus()} ref={paragraphRef}>
          Hello
        </p>
      </form>
    </div>
  );
}

export default UseRefExample1;
