// Always the easiest way to learn something new, is to do with a hard way.

/* NOTE :
   whenever, we call setContact() function
    we have to provide "new version of state" , to replace the old version.
*/

function App() {
    const [contact, setContact] = React.useState({
        firstName: "Jeon",
        lastName: "JungKook",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    let starIcon = contact.isFavorite ?  "star-Filled.png" : "star-empty.png" 

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
                    <img 
                        src = {`./images/${starIcon}`}
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




//       Above is same as this:

// function toggleFavorite() {
//     setContact(prevContact => {
//         return {
//             firstName: "John",
//             lastName: "Doe",
//             phone: "+1 (719) 555-1212",
//             email: "itsmyrealname@example.com",
//             isFavorite: true,   
//             isFavorite: !prevContact.isFavorite
//         }
//     })
// }

//  or

// function toggleFavorite() {
//     setContact(prevContact => ({
//         ...prevContact,
//         isFavorite: !prevContact.isFavorite
//     }))
// }

//  or  (use extra () parenthesis)  -->   setContact(prevContact => ({ }))

// function toggleFavorite() {
//     setContact(prevContact => ({ ...prevContact, isFavorite: !prevContact.isFavorite }))
// } 