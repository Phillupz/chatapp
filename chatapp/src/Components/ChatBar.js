import React from "react"
import styled from "styled-components"
import { FaTrash } from "react-icons/fa"

const ChatBarCont = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
`

const ButtonDiv = styled.div`
  background-color: pink;
  height: 42.5px;
  text-align: center;
  display: flex;
  position: relative;
`

const DeleteButton = styled.button`
  right: 8px;
  top: 20%;
  position: absolute;
  background-color: none;
  border: none;
`

const MessageInfoCont = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 6% 93%;
  height: 42.5px
`

const ImageCont = styled.div`
  background-color: white;
  width: 40px;
  height: 40px;
  margin-left: 6%;
`
const Image = styled.img`
  justify-content: center;
  width: 40px;
  height: 40px;
`

const UserNameCont = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  background-color:green;
  height: 40px;
`

function ChatBar() {
  return (
    <ChatBarCont>
      <MessageInfoCont>
        <ImageCont>
          <Image src="#"/>
        </ImageCont>
        <UserNameCont>
          <p>user name</p>
        </UserNameCont>
      </MessageInfoCont>
      <ButtonDiv>
        <DeleteButton><FaTrash size={17}/></DeleteButton>
      </ButtonDiv>
    </ChatBarCont>
  )
}

export default ChatBar