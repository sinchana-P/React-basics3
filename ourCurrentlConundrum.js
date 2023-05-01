function App() {
    const thingsArray = ["Thing 1", "Thing 2"]

    var pTag = thingsArray.map( item =>  <p>{item}</p>)

    //console.log(pTag)

    function addItem() {
        console.log(thingsArray)
        thingsArray.push(`Thing ${thingsArray.length+1}`)
        // return (
        // )
        
    }

    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    
    return (
        <div>
            <button onClick = {addItem}>Add Item</button>
            { pTag }
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));