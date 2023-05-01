   /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     * 
     * props.darkMode ? "#222222" : "#cccccc"
     */

function Box(props) {
// <div style={styles} className="box" key={props.id}></div>
    console.log(props.on)
    const styles = {
        backgroundColor: props.on ? "#222222" : "none"
    }
  return (
      <div className="box" style={styles}></div>
  )
}



function App(props) {
  const boxesArray = [
      {
          id: 1,
          on: true
      },   
      {
          id: 2,
          on: false
      },   
      {
          id: 3,
          on: true
      },   
      {
          id: 4,
          on: true
      },   
      {
          id: 5,
          on: false
      },   
      {
          id: 6,
          on: false
      },   
  ]

   const [boxes, setBoxes] = React.useState(boxesArray)
  // const color =  props.darkMode ? "#222222" : "#cccccc"
  // const styles = {
  //   backgroundColor : "#222222"
  // }

  //note: we could have places these 62 - 64 lines in Box comp , but it needs the access to boxes array,
  // So, we placed only selected part of lines into the Box comp. Tq:)
  const displayBox = boxes.map(oldBox => (
            <Box key={oldBox.id} on={oldBox.on} />
            ))

  return (
      <main>
          <h1>Boxes will go here</h1>
          {displayBox}
      </main>
  )
}

ReactDOM.render(<App darkMode={true}/>, document.getElementById("root"))

