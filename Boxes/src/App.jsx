import boxes from "./boxes"
import Box from "./Box"
import { useState } from "react"

const App = () => {
  const [squares, setSquares] = useState(boxes)

  const squareElements = squares.map(square => (
    <Box key={square.id} on={square.on} />
  ))

  return (
    <main>
      {squareElements}
    </main>
  )
}

export default App