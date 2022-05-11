import React, {useState, useEffect} from "react"
import Navigation from "./Navigation.js"
import Chat from "./Chat.js"
import styled from "styled-components"

const AppContainer = styled.div`
  height: 700px;
  padding: 1%;
  background-color: #DBDBDB;
  display: grid;
  grid-template-columns: 25% 74%;
  grid-column-gap: 1%;
`

function App() {
  const [search, setSearch] = useState('');
  const [texts, setTexts] = useState([]);

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  const filteredTexts = texts.filter(text => text.includes(search))

  return (
    <AppContainer>
      <Navigation search={search} handleSearch={handleSearch} />
      <Chat texts={filteredTexts}/>
    </AppContainer>
  );
}

export default App;
