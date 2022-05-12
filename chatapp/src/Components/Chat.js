import React from "react"
import styled from "styled-components"
import DisplayArea from './DisplayArea.js'

const ChatContainer = styled.div`
`

function Chat({searchEngaged, handleSearchClose, masterData}) {
  return (
    <ChatContainer>
      <DisplayArea masterData={masterData} handleSearchClose={handleSearchClose} searchEngaged={searchEngaged}/>
    </ChatContainer>
  )
}

export default Chat;