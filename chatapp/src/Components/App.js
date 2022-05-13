import React, { useState, useEffect } from "react"
import Navigation from "./Navigation.js"
import Chat from "./Chat.js"
import styled from "styled-components"

const AppContainer = styled.div`
  height: 90vh;
  padding: 1%;
  border: 2px solid black;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 25% 74%;
  grid-column-gap: 1%;
  margin:25px
`

function App() {
  const [searchEngaged, setSearchEngaged] = useState(false)
  const [masterData, setMasterData] = useState([])
  const [filterChat, setFilterChat] = useState('')
  
  useEffect(() => {
    fetch("http://localhost:3000/userdata")
    .then((r) => r.json())
    .then((data) => setMasterData(data))
  }, [])

  const addNewTexts = (newText) => {
    setMasterData([...masterData, newText])
  }

  function handleSearchRender(e) {
    setSearchEngaged(!searchEngaged)
  }

  function handleSearchClose() {
    setSearchEngaged(!searchEngaged)
  }

  const userSearch = ""

  const filteredChats = masterData.filter(chat => chat.username.includes(userSearch))

  return (
    <AppContainer>
      <Navigation searchEngaged={searchEngaged} masterData={masterData} handleSearchRender={handleSearchRender}/>
      <Chat masterData={filteredChats} handleSearchClose={handleSearchClose} searchEngaged={searchEngaged} addNewTexts={addNewTexts}/>
    </AppContainer>
  );
}

export default App;
