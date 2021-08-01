import React,{useState} from 'react'
import { colors } from '../../../infrastructure/theme'; 
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

function QuestionBox() {
    const height="6vh"
   const [textBox,updateTextBox]=useState("")
    const MainQuestionBox=styled.div`
        width: 10vw;
        height: 10vh;
    `
    const TextArea=styled.textarea`
    resize: none;
    width: ${height};
    `
    const handleTextChange=(e:any)=>{
        updateTextBox(e.target.value)
    
        e.target.style.height = (e.target.scrollHeight)+"px";
        
    }
    return (
        <MainQuestionBox >
        <TextArea key="1" value={textBox} onChange={(e)=>handleTextChange(e)}/>
     
        </MainQuestionBox>
    )
}

export default QuestionBox
