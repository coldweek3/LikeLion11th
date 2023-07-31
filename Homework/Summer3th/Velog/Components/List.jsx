import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons"

const TotalList = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    margin-right: 20px;
    color: ${({ theme }) => theme.fontColor};
    background-color: ${({ theme }) => theme.CardColor};
    

`

const Img = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    img {
        width: 390px;
        height: 240px;
    }
`
const Contents = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

const ConTitle = styled.div`
    display: flex;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
    margin-left:20px;
    width: 360px;
    
    
`
const Content = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-left:20px;
    width: 360px;
    height: 100px;
    
    color: #495057;
`

const ETC = styled.div`
    display: flex;
    margin-bottom: 10px;
    margin-left:20px;
    width: 360px;
    height: 50px;
    
    color: #868E96;
    font-size: 0.75rem;
`

const Personal = styled.div`
    display: flex;
    margin-left:20px;
    width: 360px;
    
`

const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        width: 20px; 
        height: 20px; 
        border-radius: 50%;
        margin-right: 4px;
    }

    span.by {
        color: #868E96; /* 적용할 원하는 색상 설정 */
        margin-right: 4px; /* 원하는 간격 설정 */
    }
`;
    

const Heart = styled.div`
    display: flex;
    align-items: center;
    margin-left: 220px;

    svg {
        margin-right: 4px;
    }
`

export function List({listimage, contitle, content, date, comCount, profileImg, writer, heartcount}) {
    return(
        <TotalList>

            <Img>
                <img src={listimage}/>  
            </Img>

            <Contents>
                <ConTitle>{contitle}</ConTitle>
                <Content>{content}</Content>
                <ETC>
                    {date} 
                    {comCount}개의 댓글
                </ETC>

                <Personal>
                    <Profile>
                        <img src={profileImg} />
                        <span className="by">by</span> {writer}
                    </Profile>

                    <Heart>
                        <FontAwesomeIcon icon={faHeart} /> {' '}
                        {heartcount}
                    </Heart>                   
                </Personal>

            </Contents>
        </TotalList>

    
    )
}

export default List
