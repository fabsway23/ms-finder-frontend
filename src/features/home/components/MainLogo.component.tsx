import React from 'react'
import styled from 'styled-components'
import img from "../../../resources/Logo.svg"
import { colors } from '../../../infrastructure/theme';
const Logo=styled.img`

    width:26vw;
    transform: translate(7vw,-48vh);

`
const BlueBg=styled.div`
width:40vw;
height:51vh;
background:${colors.bg.primary};
border-radius:0% 0% 50% 50% ;
transform: translate(0vw,-22vh);
margin:0;

`
function MainLogo() {
    return (
        <div>
            <BlueBg>   </BlueBg>
            <Logo src={img}/>
        </div>
    )
}

export default MainLogo

