import styled, { css } from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSun, faMagnifyingGlass, faMoon } from "@fortawesome/free-solid-svg-icons"
import '../src/App.css'
import React, { useState } from 'react';
import { lightTheme, darkTheme } from '../src/Theme';
import { ThemeProvider } from "styled-components";

const Head = styled.header`
    width: 100%;
    height: 65px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor };
        ${({ isHome }) =>
        !isHome &&
        css`
        background-color: ${({ theme }) => theme.bgColor };
    `}
`;
    
const Logo = styled.div`
    display: flex;
    margin-left: 70px;
    font-size: 30px;
`

const Icons=styled.div`
    display: flex;
    margin-right: 70px;
    font-size: 30px;
    justify-content: center;
    align-items: center;

`
const IconItem = styled.div`
    display: flex;
    margin-left: 20px;
    
`

const LoginButton = styled.div`
    display: flex;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.loginColor };
    color: ${({ theme }) => theme.bgColor};
    font-size: 20px;
    width: 100px;
    height: 40px;
    justify-content: center;
    align-items: center;
    `

function Header({ isDarkMode, toggleDarkMode }) {
    const location = useLocation();
    const isHome = location.pathname === "/";

    return (
        // <ThemeProvider theme={theme}>
        <Head isHome={isHome}>
        <Logo>
        {isHome ? (
            <Link to={"/"}>velog</Link>
        ) : (
            <Link to={"/"}>
            <Logo>Chanju.log</Logo>
            </Link>
          // {username}
        )}
      </Logo>
            <Icons>
                <IconItem onClick={toggleDarkMode}>
                    <FontAwesomeIcon icon={isDarkMode ? faMoon : faSun} />
                </IconItem>

                <IconItem>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </IconItem>

                <IconItem>
                    <LoginButton>로그인</LoginButton>
                </IconItem>
            </Icons>
        </Head>
        // </ThemeProvider>
        
    )
}

export default Header;