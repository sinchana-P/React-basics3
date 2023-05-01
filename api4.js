function Form(){
      /**
     * Challenge: re-write the useEffect
     * It should run any time `count` changes
     * For now, just console.log("Effect function ran")
     */
    
    const [count , setCount] = React.useState(0)

    function handleClick() {
        return(
            setCount(preCount => preCount + 1)
        )
    }

    React.useEffect(() => {console.log("Effect function ran!")},[count])

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={handleClick}>ADD</button>
        </div>
    )
}

ReactDOM.render(<Form />,document.getElementById("root"))