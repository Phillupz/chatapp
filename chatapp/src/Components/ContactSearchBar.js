import React, { useState } from "react"
import styled from "styled-components"

const DmContainer = styled.div`
  display: grid;
  grid-template-columns: 15% 83%;
  margin-left: 10px;
  width: 96%;
  height: 40px;
`

const UserNameCont = styled.p`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 100;
  height: 20px;
  margin-bottom: auto;
  margin-top: auto;
  text-align: left;
  padding-left: 7px;
`
const ImageCont = styled.div`
  background-color: white;
  width: 37.5px;
  height: 37.5px;
  border: 1px solid black;
  border-radius: 50%;
  text-align:center
`

const Image = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align:center
`

const SearchInputDiv = styled.div`
  margin-top: 8px;
  display: flex;
`

const SearchInput = styled.input` 
  background-color: white;
  border: 0;
  border: 1px solid black;
  border-radius: 7px;
  font-size: 14px;
  height: 30px;
  width: 96%;
  margin-bottom:1.76%
`

const DataResult = styled.div`
  position:absolute;
  margin-top: 5px;
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto; 
  color: black;
  &::-webkit-scrollbar {
    display: none;
  }
`

const DataItem = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  color: black;
`

function ContactSearchBar({masterData}) {
  const [filteredUsers, setFilteredUsers] = useState([])
  const [search, setSearch] = useState("")

  function handleChange(e) {
    const searchWord = e.target.value;
    setSearch(e.target.value)
    const filteredSearch = masterData.filter((user) => {
        if (user.username.toLowerCase().includes(searchWord.toLowerCase())){
          return user
        }
      })
      if (searchWord === "") {
        setFilteredUsers([]);
      } else {
        setFilteredUsers(filteredSearch);
      }
    }

  return (
    <div>
      <SearchInputDiv>
        <SearchInput
          type="text"
          placeholder="Search Friends..."
          value={search}
          onChange={handleChange}
         />
      </SearchInputDiv>
      {filteredUsers.length != 0 && (
        <DataResult>
          {filteredUsers.map((user) => {
            return (
              <DataItem>
                <DmContainer>
                  <ImageCont>
                    <Image src={user.photo}/>
                  </ImageCont>
                  <UserNameCont>{user.username}</UserNameCont>
                </DmContainer>
              </DataItem>
            );
          })}
        </DataResult>
      )}
    </div>
  );
}

export default ContactSearchBar