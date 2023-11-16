import "./App.css"
import { useState, useEffect, useRef } from "react"

function App() {
    const [name, setName] = useState("")
    // const [renderCount, setRenderCount] = useState(1)
    // const renderCount = useRef(1)

    const inputRef = useRef()

    const prevName = useRef('')

    useEffect(() => {
      // setRenderCount(prevRenderCount => prevRenderCount + 1)  
      // renderCount.current = renderCount.current + 1

      prevName.current = name
    })

    function focus(){
      inputRef.current.focus()
      // don't use refs to hold data, that should always be done with a state value so it's connected to the lifecycle. 
    }

    return (
        <div className="App">
            {/* <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} /> */}
            <input value={name} onChange={e => setName(e.target.value)} />
            <p>My name is {name}</p>
            <p>My name is {name} and it used to be {prevName.current}</p>


            {/* <p>I rendered {renderCount} times</p> */}
            {/* <p>I rendered {renderCount.current} times</p> */}

            {/* <button onClick={() => focus()}>Focus</button> */}
        </div>
    )
}

export default App
