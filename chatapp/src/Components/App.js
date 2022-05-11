import React from "react"
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
  return (
    <AppContainer>
      <Navigation />
      <Chat />
    </AppContainer>
  );
}

export default App;
