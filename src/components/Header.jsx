import logoReact from '../assets/react-core-concepts.png';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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