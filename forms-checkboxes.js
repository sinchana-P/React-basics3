// use "htmlFor" to associate label, to the proper checkbox having unique-id 
// bcz it is a checkbox, we aren't maintaining a string

// we need name and value >> from event.target
// so we need to "Destructure" it >> inside {name, value}
// checked property: {takes boolean as input value}

// there is "no" value property for checkbox,
// but we have checked property.

function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: "", isFriendly : true}
    )
    
    function handleChange(event) {
        const {name,value,type,checked} = event.target

        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    console.log(formData.firstName, formData.lastName, formData.email, formData.comments)
    console.log(formData.comments)
    
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
            <textarea 
                placeholder="Comment your view"
                name="comments"
                onChange={handleChange}
                value={formData.comments}
            />
            <input
                type="checkbox"

                onChange={handleChange}
                name="isFriendly" 
                checked={formData.isFriendly}
                id = "isFriendly"  //for label               
            />
            <label htmlFor="isFriendly">Are you friendly ?</label>
            <br />
        </form>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))