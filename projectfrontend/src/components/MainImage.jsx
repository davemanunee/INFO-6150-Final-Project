import { FacebookRoundedIcon } from "@mui/icons-material";
import styled from "styled-components"
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { DiApple } from 'react-icons/di';
import { mobile } from "../responsive";


const Container = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    background-color:white;
    position:relative;
    margin-bottom: 4vh;

    `;

const Wrapper = styled.div`
        height: 100%;
    `;

const Slide = styled.div`
width: 100vw;
  height: 100%;
display: flex;
align-items: center;
overflow-x:none;
background-image:url('/assets/Main-image.jpg');
background-size:contain;
background-repeat: no-repeat;
${mobile({ backgroundImage:"none" })}

`;

const InfoContainer = styled.div`
padding: 20px 30px;
flex:1;
margin-left: 30px;
${mobile({ marginLeft: "10px" })}
`;

const Title = styled.h1`
  font-size: 25px;
  margin-top: -250px;
`;

const Desc = styled.p`
margin: 30px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const StyledButton = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 60px;
    width: 300px;
    height: 60px;
    ${mobile({ width:"150px"})}
    
`;
const Button = styled.button`
  padding: 10px;
  margin:10px;
  font-size: 16px;
  background-color: transparent;
  cursor: pointer;
  font-family:Georgia, 'Times New Roman', Times, serif;
  

`;

const Pop = styled.span`
text-shadow:0 0 10px #FF9551,
    0 0 20px #fff,
    0 0 40px #fff,
    0 0 80px #fff,
    0 0 120px #fff,
    0 0 160px #fff;
    color: plum;
    font-size: larger;
`;

const MainImage = () => {
    return (
        <Container>
            <Wrapper>
                <Slide>
                    <InfoContainer>
                        <Title>Buy, sell, and discover fashion, home decor,<br />
                            beauty, and more</Title>
                        <Desc>Sign up now and enjoy <Pop >POPPING</Pop> deals</Desc>

                        <StyledButton>

                            <Button style={{ backgroundColor: '#007bff', color: 'white', border: 'none' }}>
                            <FaFacebook /> Continue with Facebook
                            </Button>

                            <Button style={{ backgroundColor: 'white', color: 'black' }}>
                                <FcGoogle /> Continue with Google
                            </Button>

                            <Button style={{ backgroundColor: '#121212', color: 'white' }}>
                            <DiApple /> Continue with Apple
                            </Button>

                        </StyledButton>

                    </InfoContainer>
                </Slide>
            </Wrapper>


        </Container>
    )
}

export default MainImage