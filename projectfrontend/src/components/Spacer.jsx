import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 15vh;
    display: flex;
    background-color: #ff9551;
    color: white;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

const Spacer = ({ title }) => {
  return (
   
    <Container>
        {title} 
    </Container>

  )
}

export default Spacer