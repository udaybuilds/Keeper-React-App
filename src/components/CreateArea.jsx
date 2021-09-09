import React, { useState } from "react"
import AddIcon from "@material-ui/icons/Add"
import Fab from "@material-ui/core/Fab"
import Zoom from "@material-ui/core/Zoom"

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    timeStamp: ""
  })
  const [noting, changeNoting] = useState(false)
  function handleClick() {
    changeNoting(true)
  }

  function handleChange(event) {
    const { name, value } = event.target
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value,
        timeStamp: new Date().toLocaleTimeString()
      }
    })
  }

  function submitNote(event) {
    event.preventDefault()
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    changeNoting(!noting)
  }

  return (
    <div>
      <form className="create-note">
        {noting ? <input name="title" onChange={handleChange} value={note.title} placeholder="Title" /> : null}
        <textarea onClick={handleClick} name="content" onChange={handleChange} value={note.content} placeholder="Take a note..." rows={noting ? 3 : 1} />
        <Zoom in={noting}>
          {noting ? (
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          ) : (
            <div></div>
          )}
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea
