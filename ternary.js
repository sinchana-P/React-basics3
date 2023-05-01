function App() {
    /**
     * Challenge 1: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    // const isGoingOut = true
    
    // let answer  // Use ternary here
    // if(isGoingOut === true) {
    //     answer = "Yes"
    // } else {
    //     answer = "No"
    // }

    /**
     * Challenge 2: 
     * move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    
     const isGoingOut = true
    // const answer = isGoingOut ? "YES" : "NO"

    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "YES" : "NO"}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


/* NOTE :
    condition ? exprIfTrue : exprIfFalse

link:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
*/

/* NOTE :

    {} --> not only allow us to write variables
       --> but, also allow us write expression within it , in the MarkUp (HTML)
*/       