function App() {
    /**
     * Challenge part 1:
     * 1. Initialize state with the default value of the
     *    array pulled in from boxes.js
     * 2. Map over that state array and display each one
     *    as an empty square (black border, transparent bg color)
     *    (Don't worry about using the "on" property yet)
     */
    const boxesArray = [
        {
            id: 1,
            on: true
        },   
        {
            id: 2,
            on: false
        },   
        {
            id: 3,
            on: true
        },   
        {
            id: 4,
            on: true
        },   
        {
            id: 5,
            on: false
        },   
        {
            id: 6,
            on: false
        },   
    ]

    const [boxes, setBoxes] = React.useState(boxesArray)
    console.log(boxes)

    const displayBox = boxes.map(oldBox => <div className="box" key={oldBox.id}></div>)

    return (
        <main>
            <h1>Boxes will go here</h1>
            {displayBox}
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
