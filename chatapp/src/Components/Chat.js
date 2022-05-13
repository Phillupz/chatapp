import React from "react"
import styled from "styled-components"
import DisplayArea from './DisplayArea.js'

const ChatContainer = styled.div`
`

function Chat({searchEngaged, handleSearchClose, masterData, addNewTexts}) {
  return (
    <ChatContainer>
      <DisplayArea masterData={masterData} handleSearchClose={handleSearchClose} searchEngaged={searchEngaged} addNewTexts={addNewTexts}/>
    </ChatContainer>
  )
}

export default Chat;