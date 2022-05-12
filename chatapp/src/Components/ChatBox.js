import React from "react"
import styled from "styled-components"

const DmContainer = styled.div`
  // background-color: blue;
  display: grid;
  grid-template-columns: 7% 83%;
  width: 45%;
  height: 35px;
  position: relative;
  left: 4px;
  align-items: baseline;
  border: 1px solid black;
  border-radius: 10px;
  padding: 2px;
  padding:2.5px
`

const ImageCont = styled.div`
  background-color: white;
  width: 34px;
  height: 34px;
  margin-left: 6%
  grid-row: 100%;
`

const UserNameCont = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  height: 14px;
  width: 50%;
  // background-color:green;
  margin-bottom: auto;
  margin-top: 0px;
  margin-left: 12px;
`

const Image = styled.img`
  justify-content: center;
  width: 34px;
  height: 34px;
`
const TextDisplay = styled.p`
  // background-color: orange;
  height: 16px;
  width: 180%;
  margin-top: 2px;
`

function ChatBox({message}) {
   return (
     <DmContainer>
       <ImageCont>
         <Image src={message.photo}/>
       </ImageCont>
       <UserNameCont>{message.username}<TextDisplay>{message.message}</TextDisplay></UserNameCont>
       
     </DmContainer>
   )
}

export default ChatBox