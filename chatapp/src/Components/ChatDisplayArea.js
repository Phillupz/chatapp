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


function ChatDisplayArea({searchEngaged, masterData}) {
  const mockData = [1, 2, 3]
  console.log(masterData)
  
  const chatBoxes = masterData.map((message) => {
     return (
       <div className = "chatbox">
        <ChatBox key={message.id} message={message}/>
      </div>
     )
  })

  return (
    <ChatDisplay>{chatBoxes}</ChatDisplay>
  )
}

export default ChatDisplayArea