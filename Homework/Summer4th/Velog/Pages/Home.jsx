import Header from "../Components/Header";
import HeaderBottom from "../Components/HeaderBottom";
import Listcontent from "../Components/Listcontent";
import styled from "styled-components";
import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../src/Theme';

const Whole = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.fontColor};
`;

function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.style.backgroundColor = isDarkMode ? darkTheme.bgColor : lightTheme.bgColor;
        document.documentElement.style.color = isDarkMode ? darkTheme.fontColor : lightTheme.fontColor;
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const theme = isDarkMode ? darkTheme : lightTheme;
    
    return (
            <Whole>
                <HeaderBottom toggleDarkMode={toggleDarkMode} />
                <Listcontent 
                    toggleDarkMode={toggleDarkMode}
                    isDarkMode={isDarkMode} 
                />
            </Whole>
        
    );   
}

export default Home;
