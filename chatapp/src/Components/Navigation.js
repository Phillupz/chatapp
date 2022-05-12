import React from "react"
import styled from "styled-components"
import MessageList from "./MessageList.js"
import Search from "./Search.js"

const NavContainer = styled.div`
  justify-items: center;
  padding: .59%;
  text-align:center;
  border-right: 1px solid black;
  padding-right: 3%;
`

const ProfileInfoCont = styled.div`
  display: grid;
  grid-template-columns: 6% 93%;
  height: 51.5px;
  margin-bottom: 12px;
  border-bottom: 1px solid black;
  padding-bottom: .625%;
  margin-left: 5px;
`

const ImageCont = styled.div`
  background-color: white;
  width: 50px;
  height: 50px;
  margin-left: 6%;
  margin-bottom:3px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  border-radius: 50%;
`
const UserNameCont = styled.p`
  font-family: Helvetica;
  font-size: 16px;
  font-weight: 100;
  text-align:left;
  height: 20px;
  width:70%;
  margin: auto;
`

function Navigation({handleSearchRender, masterData, searchEngaged}) {
  return (
    <NavContainer>
      <ProfileInfoCont>
        <ImageCont>
          <Image src="https://i.ibb.co/Z8JvTv8/tormund-giantsbane-game-thrones.jpg"/>
        </ImageCont>
        <UserNameCont>Tormund Giantsbane</UserNameCont>
      </ProfileInfoCont>
      <MessageList searchEngaged={searchEngaged} masterData={masterData} handleSearchRender={handleSearchRender}/>
    </NavContainer>
  )
}

export default Navigation;