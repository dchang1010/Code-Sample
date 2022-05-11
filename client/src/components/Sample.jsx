import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChopSentences from './ChopSentences.jsx';

export default function Sample() {
  const [sentence, setSentence] = useState('');
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setSentence({
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = () => {
    let inputSentence = {
      input: sentence.input
    };
    axios.post('/api/test', inputSentence)
      .catch((err) => console.error(err));
  };

  useEffect (() => {
    axios.get('/api/test')
      .then((response) => {
        setList(response.data)
      })
      .catch((err) => {
        console.error(err);
      });
  }, [])

  return (
    <div>
      <img class="resize" src="Lyft-Logo.png"/>
      <h1>Every 3rd Letter</h1>
      <form onSubmit={handleSubmit}>
        <label> Type Sentence
          <input name='input' onChange={handleChange} />
        </label>
        <button>Chop Sentence</button>
      </form>
      <ul className="sentences">
        <ChopSentences list={list}/>
      </ul>
    </div>
  )
}