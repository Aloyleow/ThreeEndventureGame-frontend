import { useState } from "react"

const LoadPage = () => {
  const [counter, setCounter] = useState(0)

  return (
  <div className="load-page" onClick={() => setCounter((prev) => prev + 1)}>
    <div className="loader">
    </div>
    <div>
      <h3>Give it a moment to load... While waiting click somewhere</h3>
      <h1>{counter}</h1>
    </div>
  </div>
  )
}

export default LoadPage