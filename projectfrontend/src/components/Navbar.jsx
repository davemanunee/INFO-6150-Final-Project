import React from 'react'
import styled from 'styled-components'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from '../responsive'; 


const Container = styled.div`
    height: 60px;
    background-color: #ff9551; 
    color: white;
    ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between;
align-items: center;
${mobile({padding: "10px 0px"})}`;

const Left = styled.div`
flex:1;
display:flex;
align-items: center;`;

const Language = styled.span`
font-size:18px;
cursor:pointer;
${mobile({display: "none"})}`;

const SearchContainer = styled.div`
    /* border : 0.5px solid lightgray; */
    display: flex;
    align-items: center;
    margin-right: 10px;
    margin-left: 25px;
    padding: 5px;

`;

const Input = styled.input`
    border:none;
    ${mobile({width:"50px"})}
`

const Center = styled.div`
    flex:1;
`;

const Logo = styled.h1`
    font-weight:bold;
    text-align:center;
    ${mobile({fontSize:"24px"})}
    `;


const Right = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent:"center",flex:2})}
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({fontSize:"12px",marginLeft:"10px"})}
`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language> EN</Language>
                    <SearchContainer>
                        <Input placeholder='Search'/>
                        <Search style={{color:'black', fontSize:'18', marginLeft:'8px'}}/>


                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>POPShop</Logo>
                </Center>

                <Right>
                    <MenuItem>Register</MenuItem>
                    <MenuItem>Sign In</MenuItem>
                    <MenuItem> <Badge badgeContent={4} color="primary">
                        <ShoppingCartOutlined />
                    </Badge> </MenuItem>
                </Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar