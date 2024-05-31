export default function TapButton(props) {

    function handleClick() {
        console.log(`You clicked the button labeled: ${props.children}`);
    }

    return (
    <li>
        <button onClick={handleClick}>{props.children}</button>
    </li>
    );
}