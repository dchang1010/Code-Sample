import React, { useState, useEffect } from 'react';
import ChopSentencesEntry from './ChopSentencesEntry.jsx'

export default function ChopSentences({ list }) {
  return (
    <div>
      {list.map((sentence, index) => (
        <ChopSentencesEntry sentence={sentence} key={index}/>
      ))}
    </div>
  )
}