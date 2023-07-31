import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Memo from "../Components/Memo";
import StyledComponents from "../src/images/StyledComponents.png";

const Content= styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.bgColor};
color: ${({ theme }) => {
    return theme.fontColor;
}};
    
    `

const ContentDetail= styled.div`
display: flex;

`

function StyledComponentmemo() {
    return(
        <>
        
        <Content>
            <ContentDetail>
                <Memo
                title="Styled-Component 정리"
                nickname="chanju"
                date="2023년 7월 18일"
                contentImg={StyledComponents}
                content="하하"
                />

            </ContentDetail>
        </Content>
        </>
        

    );
}

export default StyledComponentmemo;