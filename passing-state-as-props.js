// // Combining both concepts
// Note 1 :
// whenever state changes, the respective components, and its child components like <Count /> in which state exists are re-rendered (render : React took the markup to be displayed and prints to the screen) 

function Count(props) {  //3. Receiving as Props
    
    console.log("Count component rendered")
    return (
        <div className="counter--count">
            <h1>{props.number}</h1>
        </div>
    )
}

function App() {
    const [count, setCount] = React.useState(0)   //1. initiating state inside our App component
    
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */

     console.log("App component rendered")

    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count
                number={count}   //2.  Passing State value 
            />     
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
