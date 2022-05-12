import React from "react"
import styled from "styled-components"
import ChatBox from "./ChatBox.js"

const ChatDisplay = styled.div`
  background-color: white;
  height: 85%;
  width: 99%;
  margin: auto;
  display: grid;
  align-content: end;
  grid-auto-rows: 10%
`


function ChatDisplayArea({searchEngaged}) {
  console.log("3",searchEngaged)
  const mockData = [1, 2, 3]
  
  const chatBoxes = mockData.map((chat) => {
    console.log("1",searchEngaged)
     return <ChatBox />
  })

  return (
    <ChatDisplay>{chatBoxes}</ChatDisplay>
  )
}

export default ChatDisplayArea