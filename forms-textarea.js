// React team has taken the closing tag away   </textarea > 
// and made it self closing element
// and made it much more similar to >> text based input

function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: ""}
    )
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */

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
        </form>
    )
}

ReactDOM.render(<Form />, document.getElementById("root"))