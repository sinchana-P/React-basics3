function App() {
    const [isImportant, setIsImportant] = React.useState("Yes")
    /**
     * Challenge: 
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */
    
    function handleClick() {
         setIsImportant("No")
    }
    
    function dbClick() {
        setIsImportant("YES")
    }

    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div onClick = {handleClick} onDoubleClick = {dbClick} className="state--value" >
                <h1>{isImportant}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))