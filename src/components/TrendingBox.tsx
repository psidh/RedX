'use client';
import { useState } from 'react';

export default function TrendingBox() {
  let [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <div className='trending-box'>
        <h1 className='text-2xl font-extrabold mb-4'>Trending</h1>
        <h1>Topic is Trending noww | Trending</h1>
        <h2>#Hastag</h2>
        <h3 onClick={increment}>Post {counter}</h3>
      </div>
    </div>
  );
}
