import React from "react"
import styled from "styled-components"
import { AiOutlineSend } from "react-icons/ai"

const TextCont = styled.div`
  background-color: white;
  height: 5.5%;
  width: 99%;
  margin: auto;
  margin-top: .35%;
  position: relative;
`
const SendButton = styled.button`
  position: absolute;
  right: 10px;
  bottom: 2px;
  background-color: white;
  border: none;
`
const Search = styled.input`
  width: 92%;
  height: 84%;
  border: 1px solid black;
  border-radius: 10px;
`

function TextArea() {
  return (
  <TextCont>
    <Search></Search>
    <SendButton><AiOutlineSend size={22} /></SendButton>
  </TextCont>
  )
}


export default TextArea