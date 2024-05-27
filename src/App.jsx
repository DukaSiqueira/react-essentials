import logoReact from './assets/react-core-concepts.png';
import { CORE_CONCEPTS } from './data.js';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const randomIndex = genRandomInt(reactDescriptions.length - 1);
  const randomDescription = reactDescriptions[randomIndex];

  return (
    <header>
      <img src={logoReact} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomDescription} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

// CoreConcept component with destructuring props and default values
function CoreConept({
  image = 'https://via.placeholder.com/150', 
  title = 'Default Title', 
  description = 'Default Description'}) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

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
      </main>
    </div>
  );
}

export default App;
