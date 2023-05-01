function App() {
    const [messages, setMessages] = React.useState(["a","b","c"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
   const len = messages.length
   console.log(len)

    return (
        <div>
            {len && <h1>You have {len} unread messages!</h1>}
        </div>
    )
}

ReactDOM.render(<App/>,document.getElementById("root"))

//      or

//      {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
