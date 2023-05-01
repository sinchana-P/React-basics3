// part -2 : 

function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comments: "", isFriendly : false, employment:"" }
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
    console.log(formData.comments, formData.employment, formData.isFriendly)

    function display() {
        confirm(`Your details : 
                     Full Name: ${formData.firstName} ${formData.lastName} 
                     email: ${formData.email}  
                     Comments : ${formData.comments}
                     Job-req : ${formData.isFriendly ? "YES":"NO"}
                     Employment: ${formData.employment}  `)
    }
    
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
                checked={formData.isFriendly}   // instead of "value" attribute, here we use "checked" to display the "Result".
                id = "isFriendly"  //for label               
            />
            <label htmlFor="isFriendly">Searching for Job ?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current Employment Status</legend>

                <input 
                    type="radio"
                    id="un-employed"
                    name="employment"
                    value="un-employed"
                    onChange={handleChange}
                    checked={formData.employment === "un-employed"}  // at-last step, if it's true >> this gonna be checked on screen. Else, other one which is true. Tq :)
                />
                <label htmlFor="un-employed">Unemployed</label>
                <br />

                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    onChange={handleChange}
                    checked={formData.employment === "part-time"}  // checks for truthy or falsy values

                />
                <label htmlFor="part-time">Part-time</label>
                <br />

                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    onChange={handleChange}                           
                    checked={formData.employment === "full-time"}

                />
                <label htmlFor="full-time">Full-time</label>
                <br />

            </fieldset>

            <button onClick={display}>Submit</button>


        </form>

    )
}

ReactDOM.render(<Form />, document.getElementById("root"))