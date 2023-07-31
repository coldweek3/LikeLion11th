import React from "react";
import { Link } from "react-router-dom";
import StyledComponents from "../src/images/StyledComponents.png";
import ReactRouter from "../src/images/ReactRouter.png";
import Cat from "../src/images/Cat.jpeg";
import Techit from "../src/images/Techit.png";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../src/Theme';



import { List } from "./List";
import { Router } from "react-router-dom";

const Content = styled.div`
    display: flex;
    width: 90%;
    /* height: 500px; */
    margin-left:90px;
    margin-top: 50px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    
    
`

const ListContainer = styled.div`
    display: flex;
    flex-direction: row;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor };
`;




function Listcontent({ isDarkMode }) {
    
    return(
    
        
        <Content>
        <ListContainer>
                    
            <Link to="/styled-components">
                <List
                listimage={StyledComponents}
                contitle="Styled-Component 정리"
                content="우린 할 수 있다 .. 아 마도 .."
                date="2023년 7월 17일"
                comCount={100}
                profileImg={Cat}
                writer="Chanju"
                heartcount={8}
            />
            </Link>
            

            <Link to="/react-router">
            <List
                listimage={ReactRouter}
                contitle="React-Routers-Dom 내용 정리"
                content="우린 할 수 있다 .. 아 마도 .."
                date="2023년 7월 17일"
                comCount={100}
                profileImg={Cat}
                writer="Chanju"
                heartcount={8}
            />
            </Link>

            <Link to="/techit">
            <List
                listimage={Techit}
                contitle="nomadcoders 내용 정리"
                content="우린 할 수 있다 .. 아 마도 .."
                date="2023년 7월 17일"
                comCount={100}
                profileImg={Cat}
                writer="Chanju"
                heartcount={8}
            />
            </Link>


        </ListContainer>
        
        </Content>
        
    );
};

export default Listcontent;