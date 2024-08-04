import React, { useState } from "react"
import HighlightIcon from "@material-ui/icons/Highlight"

function Header() {
  const [currTime, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)
  return (
    <header>
      <h1>
        <HighlightIcon />
        Ud@Y's Notebook
      </h1>
      <div className="Timer">{currTime}</div>
    </header>
  )
}

export default Header
