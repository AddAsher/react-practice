import "./App.css";
import reactImg from "./assets/react-core-concepts.png";
import componentsImg from "./assets/components.png";
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConecpt from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
    function handleSelect(selectedButton) {
      // selectedButton => 'components', 'jsx', 'props', 'state'
      console.log(`You clicked on the ${selectedButton} tab!`);
    }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConecpt
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConecpt {...CORE_CONCEPTS[1]} />
            <CoreConecpt {...CORE_CONCEPTS[2]} />
            <CoreConecpt {...CORE_CONCEPTS[3]} />
            {/* <CoreConecpt {...CORE_CONCEPTS[3]} /> */}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() =>handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() =>handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() =>handleSelect('props')}>Props</TabButton>
            <TabButton onSelect={() =>handleSelect('state')}>State</TabButton>
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
