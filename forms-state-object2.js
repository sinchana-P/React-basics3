function Form() {
    const [formData, setFormData] = React.useState({
        firstName : "",
        lastName : "",
        email : ""
    })

    /**
     * Challenge: add an email field/state to the form
     */
    
    //no need to change this function, as long as we give correct name to the input tag :

    function handleChange(event) {
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name] : event.target.value            
           }
        })
    }

    console.log(formData)
    console.log(formData.firstName , formData.lastName, formData.email)

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email" 
            />
        </form>
    )
}

ReactDOM.render(<Form />,document.getElementById("root"))

