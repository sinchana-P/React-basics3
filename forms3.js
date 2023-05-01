function Form() {
    const [firstName, setFirstName] = React.useState("")
    
    function handleChange(event) {
        console.log(event)
        console.log(event.target.value)
    }
    
    // parameter passed by the browser  -->> event object

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
        </form>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))


//  o/p :

//  SyntheticBaseEvent {_reactName: 'onChange', _targetInst: null, type: 'change', nativeEvent: InputEvent, target: input, …}

//  Here, we need:

// target : input
//      > value : (...)
