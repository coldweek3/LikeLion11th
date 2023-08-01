
import styled, { css } from "styled-components";

export const Whole = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    justify-content: center;    
`
export const ContentBox = styled.div`
    width: 50%;
    height: 80%;
    display: flex;
    background-color: white;
    color: black;
    border-radius: 3%;
    flex-direction: column;
`
export const FirstSection = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10%;
    margin-top: 8%;   
`
export const Location = styled.div`
    font-size: xx-large;
    font-weight: bolder;
    margin-left: 10%;
`

export const Date = styled.div`
    float: right;
    margin-right: 10%;
    color: gray;   
`

export const SecondSection = styled.section`
display: flex;
align-items: center;
`

export const Data = styled.div`
    margin-bottom: 3%;
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    font-size: large;
    p {
        margin-bottom: 10%;
    }
`

export const Grade = styled.div`
    /* background-color: #D5FFE4; */
    background-color: ${({ IDEX_NM }) =>
    IDEX_NM === "좋음"
        ? "#D5FFE4"
        : IDEX_NM === "보통"
        ? "#D8D9DA"
        : IDEX_NM === "나쁨"
        ? "#E48586"
        : "#D8D9DA"};
    width: 40%;
    height: 60%;
    display: flex;
    margin-left: 10%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 3%;

    & > p:first-child {
    font-size: large;
    margin-bottom: 3%;
    }
    & > p:last-child {
    font-size: xx-large;
    font-weight: 700;
    }
    
`
