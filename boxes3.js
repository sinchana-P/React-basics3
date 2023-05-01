    /** Boxes challenge 3.1 - local state:
     * 
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */

    function Box(props) {
            console.log(props.on)
           
            const [flip, setFlip] = React.useState(props.on)
            
            function flipColor (){
                setFlip(oldFlip => !oldFlip)
            }

            const styles = {
                backgroundColor: flip ? "#222222" : "transparent"
            }

          return (           
                <div className="box" style={styles} onClick = {flipColor}></div>
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
                  on: false
              },   
              {
                  id: 5,
                  on: true
              },   
              {
                  id: 6,
                  on: false
              },  
              {
                  id: 7,
                  on: true
              },   
              { 
                  id: 8,
                  on: false
              },   
              {
                  id: 9,
                  on: true
              } 
           ]
        
           const [boxes, setBoxes] = React.useState(boxesArray)
           const displayBox = boxes.map(oldBox => (
                    <Box key={oldBox.id} on={oldBox.on} />
                    ))
        
          return (
              <main className="container">
                  <h1>Satisfying Boxes</h1>
                  {displayBox}
              </main>
          )
        }
        
        ReactDOM.render(<App darkMode={true}/>, document.getElementById("root"))
        
        