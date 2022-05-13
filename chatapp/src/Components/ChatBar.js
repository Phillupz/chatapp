import React from "react"
import styled from "styled-components"
import SearchBar from "./ContactSearchBar.js"
import { FaTrash } from "react-icons/fa"
import { AiOutlineClose } from "react-icons/ai"

const ChatBarCont = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  border-bottom: 1px solid black;
`

const ButtonDiv = styled.div`
  height: 51.5px;
  text-align: center;
  display: flex;
  position: relative;
`

const DeleteButton = styled.button`
  right: 16px;
  top: 20%;
  position: absolute;
  background-color: white;
  border: none;
  height: 30px;
`

const MessageInfoCont = styled.div`
  padding:.25%;
  display: grid;
  grid-template-columns: 6% 93%;
  height: 51.4px;
`

const ImageCont = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 5px;
`

const Image = styled.img`
  justify-content: center;
  width: 50px;
  height: 50px;
`

const UserNameCont = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  height: 20px;
  width:70%;
  margin: auto;
  margin-left: 16px;
`

function ChatBar({searchEngaged, handleSearchClose, masterData}) {

  function handleClick() {
    handleSearchClose()
  }

  return (
    <ChatBarCont>
      {searchEngaged 
      ? 
      <SearchBar masterData={masterData}/>
      :
      (<MessageInfoCont>
         <ImageCont>
           <Image src="#"/>
         </ImageCont>
         <UserNameCont>username</UserNameCont>
       </MessageInfoCont>)
      }
      <ButtonDiv>
        {searchEngaged 
          ? <DeleteButton onClick={handleClick}><AiOutlineClose size={17}/></DeleteButton>
          : <DeleteButton><FaTrash size={17}/></DeleteButton>
        }
      </ButtonDiv>
    </ChatBarCont>
  )
}

export default ChatBar