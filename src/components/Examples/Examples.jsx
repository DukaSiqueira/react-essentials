// React Hook
import { useState } from "react";

import TapButton from "../TapButton/TapButton";
import { EXAMPLES } from "../../data";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return (
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                <TapButton
                isSelected={selectedTopic === "components"}
                onSelect={() => handleSelect("components")}
                >
                Components
                </TapButton>
                <TapButton
                isSelected={selectedTopic === "jsx"}
                onSelect={() => handleSelect("jsx")}
                >
                JSX
                </TapButton>
                <TapButton
                isSelected={selectedTopic === "props"}
                onSelect={() => handleSelect("props")}
                >
                Props
                </TapButton>
                <TapButton
                isSelected={selectedTopic === "state"}
                onSelect={() => handleSelect("state")}
                >
                State
                </TapButton>
            </menu>
            {!selectedTopic ? (
                <p>Please select a topic. </p>
            ) : (
                <div id="tab-content">
                <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedTopic].code}</code>
                </pre>
                </div>
            )}
        </section>
    );
}