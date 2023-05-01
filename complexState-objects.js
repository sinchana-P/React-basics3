function App() {
    const [contact, setContact] = React.useState({
        firstName: "Jeon",
        lastName: "JungKook",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

        /**
     * Challenge: Use a ternary to determine which star image filename
     * should be used based on the `contact.isFavorite` property
     * 
     * `true` => "star-filled.png"
     * `false` => "star-empty.png"
     * 
     * Then use the starIcon value to display the correct image
     */

    let starIcon = contact.isFavorite ?  "../images/star-Filled.png" : "../images/star-empty.png" 
    let fav = contact.isFavorite

    function toggleFavorite() {
        setContact(fav => !fav)
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
                    <img 
                        src={starIcon} 
                        className="card--favorite"
                        onClick={toggleFavorite}
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