// CONTROLLED COMPONENTS :

// here, the value of the input box is no longer controlled by the input
// but by the React

// like,
// "STATE" >> is in the driver seat, saying input box what to display
// Rather than Input-box telling "STATE", what to be !

// Steps :
// 1. key enter >> triggers change
// 2. fun trigger  
// 3. updates "STATE" & (new value is set to "VALUE" = "", and the same is displayed on input box) 
// so,
// 4. Re-run's the component & display.

// remember to set the >>> value = {state-that-represent-the-input-value}
// _______________________________________________________________________________________________________________

function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
    )
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log(formData.firstName, formData.lastName, formData.email)
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
        </form>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))