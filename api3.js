// useEffect()
// takes 2 parameter
// useEffect( <call-back-fun>, [<dependency-array>] )   //useEffect(<required>,<optional---but-we-use-almost>)
// Still infinite loop cannot be solved. refer next part

function App() {
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(0)                                        // 1.
    
    console.log("Component rendered")                                                  // 2.
    
    // side effects
    React.useEffect(function() {                                                       // 4.  Runs at-last after every render.
        console.log("Effect ran")
                // fetch("https://swapi.dev/api/people/1")
                //     .then(res => res.json())
                //     .then(data => console.log(data))
    }, [])     // [0] compared to [1]
                // [] >>> keeping this empty, runs the useEffect only once the component is rendered, later it stops.
    
    return (                                                                            // 3.
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
        </div>
    )
}


ReactDOM.render(<App />,document.getElementById("root"))