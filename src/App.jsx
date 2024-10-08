import { useState } from 'react';
import { EXAMPLES,CORE_CONCEPTS } from './data'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'
import TabButton from './components/TabButton/TabButton';



function App() {
  const [selectedTopic, setSelectedTopic] = useState()
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log("selected " + selectedTopic)
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept {...CORE_CONCEPTS[0]}
          ></CoreConcept>

          <CoreConcept
          {...CORE_CONCEPTS[1]}
          ></CoreConcept>
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic == 'components'} onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton isSelected={selectedTopic == 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic == 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic == 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          {!selectedTopic && <p>Please selec a topic</p>}
          {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>
          )}


        </section>
      </main>
    </div>
  );
}

export default App;
