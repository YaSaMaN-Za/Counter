import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  function handleIncrease() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <main className='min-h-screen bg-slate-950 flex items-center justify-center p-4'>
      <section className='w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900 p-6 sm:p-8 text-white shadow-2xl'>
        <p className='text-sm font-medium text-indigo-400'>
          React
        </p>
        <h1 className='mt-2 text-3xl font-bold text-slate-100'>
          Counter
        </h1>

        <div className='my-8 rounded-2xl bg-slate-800/80 py-8 text-center'>
          <p className='text-sm text-slate-400'>
            Current Count
          </p>
          <p className='mt-2 text-6xl font-bold tabular-nums text-slate-100'>
            {count}
          </p>
        </div>

        <div className='grid grid-cols-2 gap-3 mt-2'>
          <button
            onClick={handleDecrease}
            disabled={count === 0}
            className='rounded-xl bg-slate-700 px-4 py-3 font-semibold hover:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-40 transition'
          >
            Decrease
          </button>

          <button
            onClick={handleIncrease}
            className='rounded-xl bg-indigo-600 py-3 font-semibold hover:bg-indigo-500 transition'
          >
            Increase
          </button>
        </div>

        <button
          onClick={handleReset}
          className='mt-3 w-full rounded-xl border border-slate-700 px-4 py-3 font-semibold text-slate-300 hover:bg-slate-800 transition'
        >
          Reset
        </button>
      </section>
    </main>
  );
}

export default App;