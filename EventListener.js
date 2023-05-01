function App() {
    function handleClick() {
        alert("I was clicked!")
        console.log("I was Clicked !!!")
    }

    function handleMouseOver() {
        alert("i was hovered!!!")
        console.log("I was hovered !!!")
    }
    return (
        <div className="container">
            <img src="./images/img.jpeg" onMouseOver={handleMouseOver}/>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

ReactDOM.render(<App /> , document.getElementById("root"))