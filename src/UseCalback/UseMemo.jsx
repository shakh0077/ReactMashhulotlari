import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(2);


  const calculatedValue = useMemo(() => {
    return count * data;
  }, [count, data]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <h3>Multiplied Value: {calculatedValue}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setData(data + 1)}>Increase Multiplier</button>
    </div>
  );
};

export default UseMemo