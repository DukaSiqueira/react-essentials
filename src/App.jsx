import Header from './components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data.js';
import CoreConept from './components/CoreConcept/CoreConcept.jsx';
import TapButton from './components/TapButton/TapButton.jsx';

function App() {
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
            <TapButton>Components</TapButton>
            <TapButton>JSX</TapButton>
            <TapButton>Props</TapButton>
            <TapButton>State</TapButton>
          </menu>
        </section>
      </main>
    </div>
  );
}

export default App;
