import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import styled from "styled-components"
import { useState } from 'react';
import { sliderItems } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 83vh;
    display: flex;
    background-color:#b9fff8;
    position:relative;
    overflow: hidden;
    margin-top:4vh;
    ${mobile({ display: "none" })}
    `;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "20px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    `;

const Wrapper = styled.div`
        height: 100%;
        display: flex;
        transform: translateX(${props => props.slideIndex * -100}vw);
        transition: all 1.5s ease;
    `;

const Slide = styled.div`
width: 100vw;
  height: 100vh;
display: flex;
align-items: center;
overflow-x:none;
background-color: #${props => props.bg};
`;

const ImageContainer = styled.div`
height: 100%;
flex:1;`;

const InfoContainer = styled.div`
padding: 20px 30px;
flex:1;
margin-left: 30px;`;

const Image = styled.img`
  height: 80%;
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

const Button = styled.button`
  padding: 10px;
  margin:10px;
  font-size: 17px;
  background-color: transparent;
  cursor: pointer;
  font-family:Georgia, 'Times New Roman', Times, serif;
`;

const Slider = () => {

const [slideIndex, setSlideIndex] = useState(0);

    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2 )
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0 )
        }

    };


    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex = {slideIndex}>
                {sliderItems.map((item)=>(
                    <Slide bg={item.bg} key={item.id}>
                    <ImageContainer>
                        <Image src={window.location.origin + item.img} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Show</Button>
                    </InfoContainer>
                </Slide>
                ))}
                
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")} >
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider