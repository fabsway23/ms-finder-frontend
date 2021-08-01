import React from 'react'
import MainLogo from "./components/MainLogo.component"
import styled from 'styled-components'
import { colors } from '../../infrastructure/theme';
const MainDiv=styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Caption=styled.div`
color:${colors.text.primary};
font-family: "Montserrat" sans-serif;
font-size: 36px;
font-style: normal;
font-weight: 600;
line-height: 44px;
letter-spacing: 0.17499999701976776px;
text-align: center;
width: 50vw;
height:4vh;
margin-top: -25vh;
margin-left: 2vw;
`
function Home() {
    return (
        <MainDiv>
            <MainLogo/>
            <Caption>
            Find answers to the hardest questions.
            </Caption>
        </MainDiv>
    )
}

export default Home
