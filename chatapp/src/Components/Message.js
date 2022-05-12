import React from "react"
import styled from "styled-components"

const DmContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 83%;
  margin-left: 10px;
  width: 96%;
  height: 40px;
`

const UserNameCont = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  height: 20px;
  margin-bottom: auto;
  margin-top: auto;
  text-align: left;
`
const ImageCont = styled.div`
  background-color: white;
  width: 38px;
  height: 38px;
  border: 1px solid black;
  border-radius: 50%;
`

const Image = styled.img`
  border-radius: 50%;
  width: 38px;
  height: 38px;
`

function Message({user}) {
   return (
     <DmContainer>
       <ImageCont>
         <Image src={user.photo}/>
       </ImageCont>
       <UserNameCont>{user.username}</UserNameCont>
     </DmContainer>
   )
}

export default Message