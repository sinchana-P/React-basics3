// using C style for loop

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

   function toggle(id){    //1.this fun is run-ned within the Box comp
        console.log(id)

        setBoxes(prevBox => {
            const newBoxes = []

            for(let i=0; i < prevBox.length; i++) {
                const currentBox = prevBox[i]
                if (currentBox.id === id){
                    const updatedBox = {
                        ...currentBox,
                        on : !currentBox.on
                    }
                    newBoxes.push(updatedBox)    
                }
                
                else {
                    newBoxes.push(currentBox)
                }
            }
            return newBoxes       // 2. returns newBoxes , new array.
        })
    }

   const displayBox = boxes.map(oldBox => (           //3. new array, newBoxes is mapped.  //4. re-render the whole App comp.
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
