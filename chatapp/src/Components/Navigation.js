import React from "react"
import styled from "styled-components"
import MessageList from "./MessageList.js"
import Search from "./Search.js"

const NavContainer = styled.div`
  background-color: #CDCDCD; 
  justify-items: center;
  padding: 1%;
  text-align:center;
`

const Search = styled.input`
  width: 96%;
  height: 4%;
`
function Navigation({search, handleSearch}) {
  return (
    <NavContainer>
      <Search search={search} handleSearch={handleSearch}/>
      <MessageList />
    </NavContainer>
  )
}

export default Navigation;