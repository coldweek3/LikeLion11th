import React from "react";
import styled from "styled-components";



const Title=styled.div`
    display: flex;
    font-weight: bold;
    font-size: 50px;
    /* width: 100%; */
    height: 70px;
    
    margin-top: 130px;
    margin-left: 195px;

`

const Personal=styled.div`
    display: flex;
    /* width: 100%; */
    height: 20px;
    
    margin-top: 20px;
    margin-left: 195px;
    color: #868E96;
    

    /* svg {
        margin-right: 30px;
    } */

`

const Contents=styled.div`
    display: flex;
    /* width: 100%; */
    /* height: 100%; */
    
    flex-direction: column;
    margin-left: 195px;
    margin-top: 40px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor };

    img{
        width: 1100px;
        height: 440px;
        /* margin-left: -30px; */

    }

`

const Content=styled.div`
    display: flex;
    /* width: 84%; */
    height: 100%;
    
    margin-top: 30px;
    font-size: 20px;
    line-height: 30px;
    
    
`

const Name=styled.div`
    display: flex;
    margin-right: 10px;
    font-weight: bold;
color: ${({ theme }) => {
    return theme.fontColor;
}};
`

const Total=styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
`


const Wrapper = styled.div`
  display: flex;
  color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.bgColor};
    margin-right: 100px;
`;

export function Memo({title, nickname, date, contentImg, content}){
    return (
        <Total>
          <Title>{title}</Title>
    
          <Personal>
            <Name>{nickname}</Name>
            {date}
          </Personal>
    
          <Wrapper>
            <Contents>
              <img src={contentImg} />
              <Content>{content}</Content>
            </Contents>
          </Wrapper>
        </Total>
      );
    }

export default Memo;