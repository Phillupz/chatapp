import React from "react"
import styled from "styled-components"

const DmContainer = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 15% 83%;
  margin: auto;
  margin-top: 6px;
  width: 96%;
  height: 40px;
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
  height: 38px;
  background-color:green;
  margin-bottom: auto;
  margin-top: auto;
  text-align: left;
`

const Image = styled.img`
justify-content: center;
width: 38px;
height: 38px;
`

function Message() {
   return (
     <DmContainer>
       <ImageCont>
         <Image src="#"/>
       </ImageCont>
       <UserNameCont>
         <p>user name</p>
       </UserNameCont>
     </DmContainer>
   )
}

export default Message