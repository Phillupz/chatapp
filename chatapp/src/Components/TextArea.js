import React from "react"
import styled from "styled-components"
import { AiOutlineSend } from "react-icons/ai"

const TextCont = styled.div`
  background-color: white;
  height: 12.3%;
  width: 99%;
  margin: auto;
  margin-top: .35%;
  position: relative;
`
const SendButton = styled.button`
  position: absolute;
  right: 10px;
  bottom 10px;
  background-color: white;
  border: none;
`

function TextArea() {
  return (
  <TextCont>
    <SendButton><AiOutlineSend size={22} /></SendButton>
  </TextCont>
  )
}


export default TextArea