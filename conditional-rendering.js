    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */

    //conditional rendering
    
     const cond1 = true
     const cond2 = false
     if(cond1 && console.log("Hello there")) {
         // this code will NOT run
     }

function Jokes(props) {
    console.log(props.id)

    const [isShown, setIsShown] = React.useState(false)

    function toggle (ID) {
        console.log(isShown)

              setIsShown(prevResult => { 
                  return !prevResult
                })            
         }

    return (
        <div>
            {props.setUp && <h1 className="setup">{props.setUp}</h1>}
            {isShown && <h2 className="punchlines">{props.punchLine}</h2>}
            <button onClick = {toggle}>Get Punch-line</button>
        </div>
    )
}


function App () {
    const jokesArray = [
        {
            id: 1,
            setup: "I got my daughter a fridge for her birthday.",
            punchline: "I can't wait to see her face light up when she opens it."
        },
        {
            id: 2,
            setup: "How did the hacker escape the police?",
            punchline: "He just ransomware!"
        },
        {
            id: 3,
            setup: "Why don't pirates travel on mountain roads?",
            punchline: "Scurvy."
        },
        {
            id: 4,
            setup: "Why do bees stay in the hive in the winter?",
            punchline: "Swarm."
        },
        {
            id: 5,
            setup: "What's the best thing about Switzerland?",
            punchline: "I don't know, but the flag is a big plus!"
        }
    ]

    // const [isShown, setIsShown] = React.useState(false)

    const displayJokes = jokesArray.map((joke) => (
        < Jokes key={joke.id} id={joke.id} setUp={joke.setup} punchLine={joke.punchline} />
        ))


    return (
        <div className="container">
            <h1 className="heading">JOKES 😂</h1>
            {displayJokes}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))