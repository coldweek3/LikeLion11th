import styled, { ThemeProvider } from "styled-components";
import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowTrendUp, faClock, faCaretDown, faEllipsisVertical } from "@fortawesome/free-solid-svg-icons"
import Listcontent from "./Listcontent";
import { lightTheme, darkTheme } from '../src/Theme';

const Whole = styled.div`
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    
`

const Cate = styled.div`
    display: flex;
    width: 100%;
    
    font-size: 34px;
    margin-top: 50px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    
`

const Cateleft = styled.div`
    display: flex;
    margin-left: 70px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    
`

const Trends = styled.div`
    display: flex;
    margin-right:50px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    
`

const Trend = styled.div`
    display: flex;
    margin-left:20px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
`
const Clock = styled.div`
    display: flex;
    margin-right: 50px;
`

const Time = styled.div`
    display: flex;
    margin-left:20px;
`
const When = styled.div`
    display: flex;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.NowColor};
    font-size: 20px;
    align-items: center;
`

const Week = styled.div`
    display: flex;
    margin-right: 20px;


`
const Cateright = styled.div`
    display: flex;
    margin-left: 815px;
`

const Dots = styled.div`
    display: flex;
`


function HeaderBottom({ isDarkMode }){
    const theme = isDarkMode ? darkTheme : lightTheme;

    return(
            <Whole>
                <Cate>
                    <Cateleft>
                        <Trends style={{ borderBottom: "2px solid" }}>
                            <FontAwesomeIcon icon={faArrowTrendUp} />
                            <Trend>트렌딩</Trend>
                        </Trends>

                        <Clock style={{color: "#93979f",}}>
                            <FontAwesomeIcon icon={faClock} />
                            <Time>최신</Time>
                        </Clock>

                        <When>
                            <Week>이번주</Week>
                            <FontAwesomeIcon icon={faCaretDown} />
                        </When>
                    </Cateleft>

                    <Cateright>
                        <Dots style={{color: "#93979f",}}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                        </Dots>
                    </Cateright>
                </Cate>
                
            </Whole>
    );
}

export default HeaderBottom;