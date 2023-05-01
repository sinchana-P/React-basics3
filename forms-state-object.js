function Form() {
    const [formData, setFormData] = React.useState({
        firstName : "",
        lastName : ""
    })
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [event.target.name] : event.target.value            
           }
        })
    }

    console.log(formData)
    console.log(formData.firstName , formData.lastName)

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
        </form>
    )
}

ReactDOM.render(<Form />,document.getElementById("root"))