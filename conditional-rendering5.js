function App() {
    const [messages, setMessages] = React.useState([])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */

    const len = messages.length
    const txt = `you have ${len} unread ${len > 1 ? "messages" : "message"} `
    const emptyTxt = `you're all caught up!`
    return (
        <div>
            <h1>{len == 0 ? emptyTxt : txt}</h1>
        </div>
    )
}

ReactDOM.render(<App />,document.getElementById("root"))


//  or
// <h1>You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}</h1>
