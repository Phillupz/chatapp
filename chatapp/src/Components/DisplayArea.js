import React from "react"
import ChatBar from "./ChatBar.js"
import styled from "styled-components"
import ChatDisplayArea from "./ChatDisplayArea"
import TextArea from "./TextArea"

const ChatContainer = styled.div`
  height: 100%;
  width: 100%;
`
const PlaceholderDiv = styled.div`
  height: 85%;
  width: 99%;
  margin: auto;
`

function DisplayArea({searchEngaged, handleSearchClose, masterData, addNewTexts}) {
  return (
    <ChatContainer>
      <ChatBar masterData={masterData} handleSearchClose={handleSearchClose} searchEngaged={searchEngaged}/>
      {searchEngaged
      ? <PlaceholderDiv></PlaceholderDiv>
      : <ChatDisplayArea searchEngaged={searchEngaged} masterData={masterData}/>
      }
      <TextArea addNewTexts={addNewTexts}/>
    </ChatContainer>
  )
}

export default DisplayArea