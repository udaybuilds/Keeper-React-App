import React, { useState } from "react"

function Header() {
  const [currTime, setTime] = useState(new Date().toLocaleTimeString())
  setInterval(() => {
    setTime(new Date().toLocaleTimeString())
  }, 1000)
  return (
    <header>
      <h1>Keeper</h1>
      <div className="Timer">{currTime}</div>
    </header>
  )
}

export default Header
