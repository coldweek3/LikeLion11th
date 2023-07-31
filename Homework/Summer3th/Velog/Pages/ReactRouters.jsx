import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Memo from "../Components/Memo";
import ReactRouter from "../src/images/ReactRouter.png";
import { lightTheme, darkTheme } from '../src/Theme';

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
background-color: ${({ theme }) => theme.bgColor};
color: ${({ theme }) => {
    return theme.fontColor;
}};

`

function ReactRouters() {
    return(
        <>
        
        <Content>
            <ContentDetail>
                <Memo
                title="React-Routers-Dom 내용 정리"
                nickname="chanju"
                date="2023년 7월 18일"
                contentImg={ReactRouter}
                content="허허"
                />

            </ContentDetail>
        </Content>
        </>
        

    );
}

export default ReactRouters;