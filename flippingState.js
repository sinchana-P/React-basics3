function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */

    /*  NOTE 1:
            Use "function" inside the setIsGoingOut(), 
                as we need the -> old value of state, to determine the new value of state.
    */
    /*  NOTE 2:
       1)  setIsGoingOut(prevState => !prevState)  --> (easy method)
       can also use,
       2)  if , else statements to return opposite of old state.
       3)  ternary operator  -->   setIsGoingOut(prevState => prevState ? false : true).
    */
   /* 
        NOTE 3:
        var [isGoingOut, setIsGoingOut] = React.useState("YES")
        --> whenever variable name starts with is or has (isGoingOut),
             it's better to use BOOLEAN VALUES instead of Hard-coded values like "Yes" or "No".
   */


    var [isGoingOut, setIsGoingOut] = React.useState(true)
 
    function click() {
        setIsGoingOut(prevState => !prevState)
        // var value = isGoingOut ? "YES" : "NO"  
        // console.log(value)    
        // console.log(isGoingOut)  
        // console.log(prevState)  
    }


    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick = {click}>
                <h1>{isGoingOut ? "YES" : "NO"}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))

