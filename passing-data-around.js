function Header(props) {
    
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    // const [user, setUser] = React.useState("Joe")
    
    return (
        <header>
            <p>Current user: {props.name}</p>
        </header>
    )
}

function Body(props) {
    console.log(props.name)
    return (
        <section>
            <h1>Welcome back, {props.name}!</h1>
        </section>
    )
}

function App() {
    const [user, setUser] = React.useState("Jeon")

    return (
        <main>
            <Header 
                name={user}
            />
            <Body 
                name={user}
            />
        </main>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
