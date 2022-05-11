import React from "react"
import styled from "styled-components"
import DisplayArea from './DisplayArea.js'

const ChatContainer = styled.div`
  background-color: #CDCDCD; 
`

function Chat() {
  return (
    <ChatContainer>
      <DisplayArea />
    </ChatContainer>
  )
}

export default Chat;