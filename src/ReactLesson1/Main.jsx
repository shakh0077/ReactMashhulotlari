import React, { useState } from 'react';

function Main() {
  const [count, setCount] = useState(0);
  const decrement = () => setCount(count - 1)
  const increment = () => setCount(count + 1)
  const reset = () => setCount(0)

  return (
    <div className='bg-sky-600 w-[600px] px-10 py-6 mx-auto my-20 text-white text-center flex flex-col gap-5'>
      <h1 className='font-extralight text-4xl'>Sonlar: {count}</h1>
      <div className='flex gap-6 justify-center'>
      <button  className='border bg-slate-400 px-6 rounded-2xl py-2 font-extralight' onClick={decrement}>Decrease</button>
      <button  className='border bg-slate-400 px-6 rounded-2xl py-2 font-extralight' onClick={reset}>Reset</button>
      <button className='border bg-slate-400 px-6 rounded-2xl py-2 font-extralight' onClick={increment}>Increase</button>
      </div>
    </div>
  );
}
export default Main;
