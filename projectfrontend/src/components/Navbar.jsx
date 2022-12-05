import React from 'react'
import styled from 'styled-components'
import { Search } from '@mui/icons-material';
import { FcGoogle } from 'react-icons/fc';


const Container = styled.div
    `height:60px;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display:flex;
justify-content:space-between`;

const Left=styled.div`
flex:1;
display:flex;
align-items: center;`;

const Language = styled.span`
font-size:14px;
cursor:pointer;`;

const SearchContainer = styled.div `
    border : 4px solid lightgray;

`;

const Center=styled.div`flex:1;`;
const Right=styled.div`flex:1;`;

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language> EN</Language>
                    <SearchContainer>
                        input
                        <Search />
                    </SearchContainer>
                </Left>
                
                <Center> <h3> Lets go for a <FcGoogle />? </h3>
                </Center>

                <Right>right</Right>

            </Wrapper>
        </Container>
    )
}

export default Navbar