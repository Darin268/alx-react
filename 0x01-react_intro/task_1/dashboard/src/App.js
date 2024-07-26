import React from 'react';
import { getFullYear, getFooterCopy } from './utils';

function App() {
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <footer>
        <p>© {getFullYear()} {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
