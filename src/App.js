import React, { useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 20) {
      amount = 20;
    }
    setText(data.slice(0, amount));
  };

  return (
    <section className='section-center'>
      <h2>Generate Lorem Paragraphs!!!</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-center'>
          <label htmlFor='amount'>Paragraphs:</label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={count}
            onChange={(e) => setCount(e.target.value)}
          ></input>
          <button type='submit'>Generate</button>
        </div>
        <p className='desc'>(from 1 to 20 paragraphs)</p>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
