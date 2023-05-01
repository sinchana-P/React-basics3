function Form() {
    const [firstName, setFirstName] = React.useState("")
  
    function handleChange(event) {
        setFirstName(event.target.value)   
        console.log(event.target) 
    }
    console.log(firstName)
    /**
     * Challenge: update the firstName state on every keystroke 
    */

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
