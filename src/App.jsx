// React Hook
import { useState } from 'react';

import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConept from './components/CoreConcept/CoreConcept.jsx';
import TapButton from './components/TapButton/TapButton.jsx';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('Please select a tab')

  function handleSelect(selectedButton) {
    setSelectedTopic(`You selected ${selectedButton}`);
  }

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* Verbose example */}
            <CoreConept 
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            {/* Destructured example */}
            <CoreConept{...CORE_CONCEPTS[1]} />
            <CoreConept{...CORE_CONCEPTS[2]} />
            <CoreConept{...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TapButton onSelect={() => handleSelect('componets')}>Components</TapButton>
            <TapButton onSelect={() => handleSelect('jsx')}>JSX</TapButton>
            <TapButton onSelect={() => handleSelect('props')}>Props</TapButton>
            <TapButton onSelect={() => handleSelect('state')}>State</TapButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
