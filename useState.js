/* method -> useState : is HOOK */

/* NOTE :
    React.useState("YES")  --->  returns the array  --->   O/P : [undefined, ƒ()]
*/

/*
import React, {useState} from "react"

export default function App() {
    useState()
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>Yes</h1>
            </div>
        </div>
    )
}

            OR

*/

function App() {
   // const result = React.useState()
   // O/P : [undefined, ƒ()]
    
    const result = React.useState("YES")
    // O/P : ["YES", f()]

   console.log(result)
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1>{result[0]}</h1>
            </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))


/* NOTE :
        In JS, to jump from HTML into JS, use curly braces {} ---> {js element}.
*/ 