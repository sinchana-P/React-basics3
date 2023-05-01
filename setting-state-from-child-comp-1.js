function Star(props){
    const starIcon = props.isFilled ? "star-Filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
        // Here registering the actual event listener "onClick"

        // return(
        //     <img 
        //         src = {`./images/${props.isFilled}`}
        //         className="card--favorite"
        //         onClick={toggleFavorite}
        //      />
        // )      
}


function App() {
    const [contact, setContact] = React.useState({
        firstName: "Jeon",
        lastName: "JungKook",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the ability to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */


    //let starIcon = contact.isFavorite ?  "star-Filled.png" : "star-empty.png" 

    function toggleFavorite() {
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        })

        console.log(contact.isFavorite)
        console.log("Toggle Favorite")
    }

    return (
        <main>
            <article className="card">
                <div className="img-box">
                     <img src="./images/jk.jpg" className="card--image" />
                </div>
                <div className="card--info">
                    <Star 
                        isFilled={contact.isFavorite}
                        handleClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}


ReactDOM.render(<App/>, document.getElementById("root"))


/*  NOTE :
Remember,
we cannot send the event listener to our custom components , that we've created .
we can only send it only to the Real DOM elements like --> div,img,article,main etc.
Recap,
Here, we've created custom component called Star, and passing it the "toggleFavorite()" function , in a custom prop called "handleClick" 

*
The ability to send / pass the state setter function " toggleFavorite() " to the children components is crucial in React
*/