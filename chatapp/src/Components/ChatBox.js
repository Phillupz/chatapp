import React from "react"
import styled from "styled-components"

const DmContainer = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 7% 83%;
  margin-top: 6px;
  width: 75%;
  height: 40px;
  position: relative;
  left: 4px;
  align-items: baseline;
  
`

const ImageCont = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  margin-left: 6%
`

const UserNameCont = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  height: 14px;
  width: 110%;
  background-color:green;
  margin-bottom: auto;
  margin-top: 0px;
`

const Image = styled.img`
  justify-content: center;
  width: 38px;
  height: 38px;
`

function ChatBox() {
   return (
     <DmContainer>
       <ImageCont>
         <Image src="#"/>
       </ImageCont>
       <UserNameCont>user name</UserNameCont>
     </DmContainer>
   )
}

export default ChatBox