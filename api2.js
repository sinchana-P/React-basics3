function App() {
    const [starWarsData,setStarWarsData] = React.useState({})

    console.log("Component rendered!")             
  
    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())
        .then(data => console.log(data))  // just to stop infinite loop for now.


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))