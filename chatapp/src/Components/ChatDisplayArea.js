import React from "react"
import styled from "styled-components"
import ChatBox from "./ChatBox.js"

const ChatDisplay = styled.div`
  background-color: white;
  height: 80%;
  width: 99%;
  margin: auto;
  display: grid;
  align-content: end;
  grid-auto-rows: 9%
`

function ChatDisplayArea() {
  const mockData = [1, 2, 3]
  
  const chatBoxes = mockData.map((chat) => {
    return (
      <ChatBox />
    )
  })

  return (
    <ChatDisplay>{chatBoxes}</ChatDisplay>
  )
}

export default ChatDisplayArea