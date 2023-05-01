/**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

function Form() {
    const [formData, setFormData] = React.useState({
            email: "",
            password : "",
            confirmPassword : "",
            isJoin : false
    })

    function handleChange(event){
            const {name,value,type,checked} = event.target
            setFormData(prevFormData => {
                return {
                    ...prevFormData,
                    [name] : type === "checkbox" ? checked : value
                }
            })
    }

    console.log(formData.password, formData.confirmPassword)

    function display(event) {
        event.preventDefault()
        if(formData.password !== formData.confirmPassword){
            alert("passwords to not match!")
            console.log("no match")
        }
        else if(formData.email && formData.password === formData.confirmPassword){
            confirm("Successfully signed up!")
            console.log("pw match")
            if(formData.isJoin)
            {
                alert("Thanks for signing up for our newsletter!")
            }
        } 
        else if(!formData.email){
            alert("please enter email!")
        }
    }
    
    return(
        <form onSubmit={display}>
            <input 
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
             <input 
                type="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
             <input 
                type="password"
                placeholder="Confirm password"               
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
            />
            <input
                type="checkbox"              
                name="isJoin"
                onChange={handleChange}
                checked={formData.isJoin}
                id="isJoin"
            />
            <label htmlFor="isJoin">I want to join the newsletter</label>
            <button>Sign up</button>
        </form>
    )
}

ReactDOM.render(<Form />,document.getElementById("root"))