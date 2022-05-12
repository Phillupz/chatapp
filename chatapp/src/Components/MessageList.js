import React, { useState } from "react"
import styled from "styled-components"
import Message from "./Message.js"
import { VscAdd } from "react-icons/vsc"
import { FaCcMastercard } from "react-icons/fa"

const DmListContainer = styled.div`
  margin: auto;
  width: 50%;
  width: 98%;
  height: 79.5%;
  display: grid;
  grid-auto-rows: 48px;
`

const Header = styled.h3`
margin-top: 12px;
margin-bottom: 3%;
margin-left: 8px;
font-family: Helvetica;
font-size: 16px;
font-weight: 100;
width: 100%;
text-align:left;
height: 25px
`

const AddButton = styled.button`
  margin-left: 52%;
  background-color: white;
  border: none;
  height: 20px;
  position: relative;
  top: 2px
`
const Search = styled.input`
  width: 96%;
  height: 4%;
  border: 1px solid black;
  border-radius: 7px;
  margin-bottom: 12px;
`

function MessageList({handleSearchRender, masterData, searchEngaged}) {
  const [search, setSearch] = useState("")

  function handleChange(e) {
    setSearch(e.target.value)

  }

  function handleClick(e) {
    handleSearchRender(e)
  }

  const usernamePool = [];

  function removeDuplicates(message){
    if (!usernamePool.includes(message.username))
      {
        usernamePool.push(message.username)
        return message;
      }
  }

  const users = masterData.filter(removeDuplicates)

  const displayedElements = users.filter((object) => {
    if (object.username.toLowerCase().includes(search.toLowerCase()))
      return object
  })
    
  const messageElement = displayedElements.map((user) => {
    return (
      <React.Fragment>
        <div><Message user={user} /></div>
      </React.Fragment>
    )
  })

  return (
    <React.Fragment>
      <Header>Direct Messages 
        {searchEngaged 
        ? <AddButton></AddButton> 
        : <AddButton onClick={handleClick}><VscAdd size={18}/></AddButton>
        }
      </Header>
      <Search onChange={handleChange} placeholder="Search..."></Search>
      <DmListContainer>{messageElement}</DmListContainer>
    </React.Fragment>
  )
}

export default MessageList