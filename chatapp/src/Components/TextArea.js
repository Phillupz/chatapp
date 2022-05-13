import React, {useState} from "react"
import styled from "styled-components"
import { AiOutlineSend } from "react-icons/ai"

const TextCont = styled.div`
  background-color: white;
  height: 5.5%;
  width: 99%;
  margin: auto;
  margin-top: .35%;
  position: relative;
`
const SendButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 2px;
  background-color: white;
  border: none;
`
const Search = styled.input`
  width: 92%;
  height: 84%;
  border: 1px solid black;
  border-radius: 10px;
`

function TextArea(addNewText) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/userdata", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: "someone",
        photo: "also someone",
        message: message
        //external: true
      })
    })
      .then(resp => resp.json())
      .then(data => addNewText(data))

    setMessage('');
  }

  return (
  // <TextCont>
  //   <Search></Search>
    <form onSubmit={handleSubmit} className="textInput">
      <input type="text" message="message" placeholder="Aa" value={message} onChange={e => setMessage(e.target.value)}/>
    </form>
    /* <SendButton><AiOutlineSend size={22} /></SendButton>
  </TextCont> */
  )
}


export default TextArea