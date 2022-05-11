import React from "react"
import ChatBar from "./ChatBar.js"
import styled from "styled-components"
import ChatDisplayArea from "./ChatDisplayArea"
import TextArea from "./TextArea"

const ChatContainer = styled.div`
  background-color: red;
  height: 100%;
  width: 100%;
`

function DisplayArea() {
  return (
    <ChatContainer>
      <ChatBar />
      <ChatDisplayArea />
      <TextArea />
    </ChatContainer>
  )
}

export default DisplayArea