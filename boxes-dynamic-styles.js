// 1. we can add Style prop to our div.
// 2. Use camelCase letters for Style properties.

function App(props) {
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
    const color =  props.darkMode ? "#222222" : "#cccccc"
    console.log(color)


    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to #222222
    // If darkMode is false, set it to #cccccc


    //document.getElementById("something").style.backgroundColor = 

    //console.log(boxes)

    // const styles = {
    //     backgroundColor: "black"
    // }

    const styles = {
        //backgroundColor : color
        backgroundColor : props.darkMode ? "#222222" : "#cccccc"
    }
    console.log(styles)
    const displayBox = boxes.map(oldBox => <div style={styles} className="box" key={oldBox.id}></div>)

    return (
        <main>
            <h1>Boxes will go here</h1>
            {displayBox}
        </main>
    )
}

ReactDOM.render(<App darkMode={true}/>, document.getElementById("root"))
