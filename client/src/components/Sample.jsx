import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChopSentences from './ChopSentences.jsx';

export default function Sample() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setInput({
      [e.target.name]: e.target.value
    }, console.log(e.target.value));
  }

  const handleSubmit = () => {
    let inputSentence = {
      input: input.input
    };
    axios.post('/api/test', inputSentence)
      .catch((err) => console.error(err));
  };

  useEffect (() => {
    axios.get('/api/test')
      .then((response) => {
        console.log(response.data, 'before')
        setList(response.data)
        console.log(list, 'after')
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return (
    <div>
      <h1>Every 3rd Letter</h1>
      <form onSubmit={handleSubmit}>
        <label> Type Sentence
          <input name='input' onChange={handleChange} />
        </label>
        <button>Chop Sentence</button>
      </form>
      <ul>
        {/* <ChopSentences sentence={sentence}/> */}
      </ul>
    </div>
  )
}