import React from 'react';
import './Counter.css'; 

export default function Counter() {
    return (
      <div className="App">
          <button>+1</button>
          <span className = "count">0</span>
      </div>
    );
  }