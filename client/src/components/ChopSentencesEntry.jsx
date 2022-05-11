import React, { useState, useEffect } from 'react';

export default function ChopSentencesEntry ({ sentence }) {

  const Every3rdLetter = (string_to_cut) => {
    let results = '';
    const chars = string_to_cut.split('');
    for (let i = 2; i < chars.length; i += 3) {
      results += chars[i];
    }
    return results
  }

  return (
    <div>
      {` return_string: '${Every3rdLetter(sentence.sentence)}' `}
    </div>
  )
}