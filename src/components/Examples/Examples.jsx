// React Hook
import { useState } from "react";

import Section from "../Section/Section";
import TapButton from "../TapButton/TapButton";
import Example from "../Example/Example";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
      setSelectedTopic(selectedButton);
    }

    return (
        <Section id="examples" title={'Examples'}>
            <menu>
                <TapButton
                isSelected={selectedTopic === "components"}
                onClick={() => handleSelect("components")}
                >
                    Components
                </TapButton>
                <TapButton
                isSelected={selectedTopic === "jsx"}
                onClick={() => handleSelect("jsx")}
                >
                    JSX
                </TapButton>
                <TapButton
                isSelected={selectedTopic === "props"}
                onClick={() => handleSelect("props")}
                >
                    Props
                </TapButton>
                <TapButton
                isSelected={selectedTopic === "state"}
                onClick={() => handleSelect("state")}
                >
                    State
                </TapButton>
            </menu>
            {!selectedTopic ? (
                <p>Please select a topic. </p>
            ) : (
                <Example selectedTopic={selectedTopic} />
            )}
        </Section>
    );
}