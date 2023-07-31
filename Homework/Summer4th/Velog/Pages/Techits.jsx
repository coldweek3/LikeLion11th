import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Memo from "../Components/Memo";
import Techit from "../src/images/Techit.png";

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

const StyledContent = styled.div`
  white-space: pre-line;
`;



function Techits() {
    return(
        <>
        <StyledContent>
            <Content>
                <ContentDetail>
                    <Memo
                    title="nomadcoders 내용 정리"
                    nickname="chanju"
                    date="2023년 7월 18일"
                    contentImg={Techit}
                    content={`
                    
                    React?
                    UI 컴포넌트 라이브러리다. React UI 컴포넌트는 자바스크립트를 이용해 만든다.

                    React는 어떤 문제를 해결하는가?
                    React 공식 웹사이트의 설명에 따르면

                    "우리는 한 가지 문제를 해결하기 위해 React를 만들었습니다. 우리가 해결하고자 한 문제는 시간에 따라 변화하는 데이터를 다루는 거대한 애플리케이션의 개발입니다."

                    DOM 요소를 매번 새롭게 생성하기 위해 UI를 함수로 만들어, 여기에 데이터를 전달하고 호출하여 뷰를 렌더링한다. 뷰를 예측할 수 있는 것이다.

                    --------------------------------------------------------------------------------------------------------
                    해당 글은 노마드 코더 강의 내용 (https://nomadcoders.co/react-hooks-introduction)을 정리한 것임을 미리 알린다.
                    --------------------------------------------------------------------------------------------------------
                    [useInput]
                    : 기본적으로 input을 업데이트한다

                    <useState를 사용했을때>

                    import React, { useState } from "react";
                    import ReactDOM from "react-dom";

                    import "./styles.css";


                    const App=() => {
                    const [item, setItem] = useState(1);
                    const incrementItem = () => setItem(item + 1);
                    const decrementItem = () => setItem(item - 1);
                    return (
                        <div className = "App">
                        <h1>Hello {item}</h1>
                        <button onClick={incrementItem}>Increment</button>
                        <button onClick={decrementItem}>Decrement</button>
                        </div>
                    );
                    };

                    const rootElement = document.getElementById("root");
                    ReactDOM.render(<App />, rootElement);

                    --------------------------------------------------------------------------------------------------------

                    [useInput을 사용했을때]

                    import React, { useState } from "react";
                    import ReactDOM from "react-dom";

                    import "./styles.css";

                    const useInput = (initialValue) => {
                    const [value, setValue] = useState(initialValue);
                    const onChange = (event) => {
                        console.log(event.target);
                    }
                    return { value, onChange };
                    // 1. useInput은 value를 return
                    };

                    const App = () => {
                    const name = useInput("Mr. ");
                    // 2. name = value
                    return (
                        <div className="App">
                        <h1>Hello</h1>
                        <input placeholder="Name" {...name} />
                        // 3. value는 name.value를 가지게 됨
                        // value={name.value} onChange={name.onChange} 이렇게 쓰거나 { ...name} 이렇게 쓸 수 있음
                        </div>
                    );
                    };

                    const rootElement = document.getElementById("root");
                    ReactDOM.render(<App />, rootElement);

                    --------------------------------------------------------------------------------------------------------

                    [validator function]
                    : 유효성 검증
                    --------------------------------------------------------------------------------------------------------
                    [useTabs]
                    :버튼에 따라 노출되는 내용 달라지게 함
                    --------------------------------------------------------------------------------------------------------
                    [useEffect]
                    : useEffect는 ComponentDidMount, ComponentWillunMount, ComponentDidUpdate 다.

                    --------------------------------------------------------------------------------------------------------

                    useClick

                    reference: 우리의 component의 어떤 부분을 선택할 수 있는 방법
                    --------------------------------------------------------------------------------------------------------

                    결론: React는 엄청나다!!!


                    `}

                    />

                </ContentDetail>
            </Content>
        </StyledContent>
        </>
        

    );
}

export default Techits;