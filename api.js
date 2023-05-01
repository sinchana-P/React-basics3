function App() {
    const [starWarsData,setStarWarsData] = React.useState({})

    console.log("Component rendered!")              // run infinite times 😱 ,coz every time the state is changed, the component is rendered.
                                                    //And state is continuously changed, as it is under fetch

    fetch("https://swapi.dev/api/people/1")
        .then(res => res.json())                      //res : response
        .then(data => setStarWarsData(data))          // creates infinite loop 😱    


    return (
        <div>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))