import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Sample() {

  return (
    <div>
      <h1>Every 3rd Letter</h1>
      <form>
        <label> Type Sentence
          <input/>
        </label>
        <button>Chop Sentence</button>
      </form>
    </div>
  )
}