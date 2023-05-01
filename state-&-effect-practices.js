function WindowTracker(){
    /**
     * Challenge 2:
     * 1. Create state called `windowWidth`, default to 
     *    `window.innerWidth`
     * 2. When the window width changes, update the state
     * 3. Display the window width in the h1 so it updates
     *    every time it changes
     */
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", function() {        // (<event>,<function>)  // the event(resize) is created or launched, whenever the <WindowTracker /> comp is rendered.
            setWindowWidth(window.innerWidth)
            console.log(`Resized! ${windowWidth}`)
        })
    },[])
    return(
        <h1>Window width: {windowWidth}</h1>
    )
}

function App () {
    const [show, setShow] = React.useState(true)
    /**
     * Challenge 1:
     * 1. Create state called `show`, default to `true`
     * 2. When the button is clicked, toggle `show`
     * 3. Only display `<WindowTracker>` if `show` is `true`
     */

    function toggle() {
        setShow(prevResult => !prevResult)
    }

    return(
        <div className="container">
            <button onClick={toggle}>Toggle windowTracker</button>
            {show && <WindowTracker/>}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))
