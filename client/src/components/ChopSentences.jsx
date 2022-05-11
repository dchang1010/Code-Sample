import React, { useState, useEffect } from 'react';
// import ChopSentencesEntry from './ChopSentencesEntry.jsx'

export default function ChopSentences({ sentence }) {
  return (
    <div>
      {sentence.map((words, index) => {
        <ChopSentencesEntry words={sentence} key={index}/>
      })}
    </div>
  )
}