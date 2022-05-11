import React from "react"
import styled from "styled-components"
import MessageList from "./MessageList.js"

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
function Navigation() {
  return (
    <NavContainer>
      <Search></Search>
      <MessageList />
    </NavContainer>
  )
}

export default Navigation;