// USE SPREAD IN (...) OPERATOR,from ES6

function App() {
    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */
    const thingsArray = ["Thing 1", "Thing 2"]
    var [array, setArray] = React.useState(["Thing 1", "Thing 2"])
   
    const liTag = array.map(el => <li className = "lists">{el}</li>)

    function addItem() {
        // We'll work on this next
        // const newThingText = `Thing ${thingsArray.length + 1}`
        // thingsArray.push(newThingText)
        // document.getElementById()
        // console.log(thingsArray)
        
        /* WHEN WE ARE SETTING AN "ARRAY" WE NEED TO RETURN A "NEW ARRAY"  --> []
            setArray(prevArray => [])
            setArray(prevArray => [<existing_array>, <new_element_to_array>])
        */
       
        const newElement = `Thing ${array.length + 1}`
        console.log(newElement)
        setArray(prevArray => [...prevArray, newElement])

    }

    // const liTag = array.map(el => <li className = "lists">{el}</li>)

    //const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div className="container">
            <button onClick={addItem}>Add Item</button>
            <ul>
                {liTag}
            </ul>
            
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

/* IMP NOTE :
        WE SHD NEVER EVER MODIFY OUR STATE "DIRECTLY".
        like -->  thingsArray.push("Test")

        We know tht we use setArray to modify our state, which will actually update the user interface on our screen.
*/
/*  NOTE 2:  2 possibilities
        setThingsArray(<new value || callback function>)
*/