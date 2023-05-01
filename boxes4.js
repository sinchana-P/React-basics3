// Note :
// Boxes challenge part 3.2 unified state :
// here, we remove state from child components
// and we create a function in parent component
// and we pass this function to the child component

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    

// Note :
// here,it's important to observe tht 
// whole function is passed to the box component
// and within box comp, the actual fun is runned, along with using the received props value .  

     function Box(props) {
        console.log(props.on)
       
        const styles = {
            backgroundColor: props.on ? "#222222" : "transparent"
        }

      return (           
            <div className="box" style={styles} onClick = {() => props.toggle(props.id)}></div>
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

       function toggle(id){
            console.log(id)
        }

       const displayBox = boxes.map(oldBox => (
                <Box key={oldBox.id} id={oldBox.id} on={oldBox.on} toggle={toggle} />
                ))
    
      return (
          <main className="container">
              <h1>Satisfying Boxes</h1>
              {displayBox}
          </main>
      )
    }
    
    ReactDOM.render(<App darkMode={true}/>, document.getElementById("root"))
    
    