import Section from "../Section/Section.jsx";
import { CORE_CONCEPTS } from "../../data";
import CoreConept from "../CoreConcept/CoreConcept.jsx";

export default function CoreConpets() {
    return (
        <Section id="core-concepts" title={'Core Concepts'}>
            <ul>
            {CORE_CONCEPTS.map((concept) => (
                <CoreConept key={concept.title} {...concept} />
            ))}
            {/* Verbose example */}
            {/* <CoreConept
                title={CORE_CONCEPTS[0].title}
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
            /> */}
            {/* Destructured example */}
            {/* <CoreConept {...CORE_CONCEPTS[1]} />
            <CoreConept {...CORE_CONCEPTS[2]} />
            <CoreConept {...CORE_CONCEPTS[3]} /> */}
            </ul>
        </Section>
    );
}