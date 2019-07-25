import React from 'react';
import { BarGraph } from './BarGraph';

function App() {
  return (
    <div className="w-100 h-100 flex flex-column justify-center items-center">
      <header className="w-100 pa4 bg-blue">
      </header>
      <main>
        <section>
          <h2>Simple vertical BarChart</h2>
          <BarGraph />
        </section>
      </main>
    </div>
  );
}

export default App;
