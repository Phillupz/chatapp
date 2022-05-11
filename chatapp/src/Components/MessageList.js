import React from "react"
import styled from "styled-components"
import Message from "./Message.js"

const DmListContainer = styled.div`
  margin: auto;
  width: 50%;
  background-color: #979797;
  width: 98%;
  height: 86%;
`

const Header = styled.h3`
background-color: white;
margin-top: 8%;
margin-bottom: 4%;
font-family: Helvetica;
font-size: 16px;
font-weight: 100;
`

const mockData = [1, 2, 3]

function MessageList() {
    
  const messageElement = mockData.map((element) => {
    return (
      <React.Fragment>
        <div><Message /></div>
      </React.Fragment>
    )
  })

  return (
    <React.Fragment>
      <Header>Direct Messages</Header>
      <DmListContainer>{messageElement}</DmListContainer>
    </React.Fragment>
  )
}

export default MessageList