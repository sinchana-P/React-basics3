// wt happens for hard-coded value: in dependency array.

function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(function() {
        console.log(`Effect ran ${count}`)
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [3])   // runs only once, even though value is 3, coz it compares --earlier_value & current_value-- & they both remained same here(i.e. 3)
    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}


ReactDOM.render(<App/>,document.getElementById("root"))
