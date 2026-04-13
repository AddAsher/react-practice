// import "./App.css";
import { use, useState } from "react";

import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConecpt from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

// Hooks must not be called outside of a React function component or a custom hook.
// This is why we cannot call useState() in the handleSelect() function,
// which is just a regular JavaScript function.
// Instead, we need to call useState() at the top level of our App component,
// and then we can use the state variable and the state updater function that it
// returns to manage our tab content.
// Hooks also can only be called on the top level (function App(), not in handleSelect())

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    setSelectedTopic(selectedButton);
    // console.log(`You clicked on the ${selectedTopic} tab!`);
    // This will show the old one because state updates are asynchronous,
    //  so the value of selectedTopic won't be updated until the next render.
  }

  let tabContent = <p>Please select a topic.</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
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
            {/* <TabButton onSelect={handleSelect}>Components</TabButton> */}
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
