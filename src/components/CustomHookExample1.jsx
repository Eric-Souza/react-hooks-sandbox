import useFetch from '../hooks/useFetch';

function CustomHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts/1',
    {}
  );

  if (loading) return <h3>loading...</h3>;

  return (
    <div>
      <h1>custom hook example 1 - useFetch</h1>

      <h3>{data.title}</h3>
    </div>
  );
}

export default CustomHookExample1;
