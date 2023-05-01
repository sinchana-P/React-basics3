function App() {
    /**
     * Challenge: Set up state to track our count (initial value is 0)
     */

    var [result, setValue] = React.useState(0)
    // var res = 0

    function inc() {      
        result =  result + 1
       // console.log(result)
        setValue(result)
    }

    function dec() {
       // console.log(result - 1)
        setValue(result - 1)
    }

    return (
        <div className="counter">
            <button className="counter--minus" onClick = {dec}>–</button>
            <div className="counter--count">
                <h1>{result}</h1>
            </div>
            <button className="counter--plus" onClick = {inc}>+</button>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))


//  whenever we need to use a old version of state,to determine new version of state.