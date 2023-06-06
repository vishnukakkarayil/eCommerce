import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import styled from 'styled-components'

const Navbar = () => {
  const Container = styled.div`
  height: 60px;
`
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between
`
const Left = styled.div` 
  flex: 1;    
  display: flex;
  align-items: center
`
const Language = styled.span`
font-size: 14px;
cursor: pointer
`
const SearchContainer = styled.div`
border: solid .5px lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px
`

const Input = styled.input`
border: none;
`
const Logo = styled.h1`
  font-weight: bold
`
const Center = styled.div`
flex: 1;
text-align: center;
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer
  margin-left: 25px;
`
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/> 
                    <Search style={{color:"gray", fontSize: 16}} />
                </SearchContainer>
            </Left>
            <Center><Logo>LAMA.</Logo></Center>
            <Right>
                <MenuItem>REGISTER</MenuItem>
                <MenuItem>sIGN IN</MenuItem>
                <MenuItem>
                <Badge badgeContent={4} color="primary">
                    <ShoppingCartOutlined />
                    {/* <MailIcon /> */}
                </Badge>
                </MenuItem>
            </Right>

        </Wrapper>
    </Container>
  )
}

export default Navbar