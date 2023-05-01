// will learn about memory leak
// Also use <addEventListener()> method on window object

// DOM v/s Browser

// error: when toggled and show==false >>>
//  CONSOLE:
//  !Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a ""memory leak"" in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function. at WindowTracker (exe1.bundle.js:61:56)

// Always try to remember tht, whenever u try to interface with side effects using useEffect, 
// never forget to cleanup <the-event> , coz any potential consequences may happen if u don't cleanup.
// whenever u unmount the element

// concept used here:   ""return from useEffect()""
// whenever we toggle OFF the <WindowTracker /> ,React realizes that this has component reached the end of it's lifecycle.
// It's about to be removed from the DOM.
// now it runs the function, tht is <return - ed> from the useEffect
// in-fact it runs blindly without knowing wt is in the function.
// and thus remove the eventListener

function WindowTracker (){

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {       
        function watchWidth(){ 
            console.log("Setting up...")                             //2.
                setWindowWidth(window.innerWidth) 
        }

        window.addEventListener("resize", watchWidth)                //1.

        return function() {     
            console.log("Cleaning up...")                            //3.
            window.removeEventListener("resize", watchWidth)
        }

    },[])

  
    return(
        <h1>Window width : {windowWidth}</h1>
    )
}

function App() {
    const [show, setShow] = React.useState(true)

    
    function toggle(){
        setShow(prevResult => !prevResult)
    }
    return (
        <div className="container">
            <button onClick={toggle}>Toggle windowTracker</button>
            {show && <WindowTracker/>}
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))