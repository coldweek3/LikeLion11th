import { useEffect, useState } from "react";
import { BodySection, DataTable, HeadSection, HeadText, HomeContainer, TableTd, TableTh } from "./components/BodyStyle";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();
const location = useLocation();
const navigateToDetail = () => {
  navigate(`/detail/${lion.MSRSTE_NM}`, { state: { MSRDT: lion.MSRDT } });
};
  // State 작성------------------------------------------------
const [weatherData, setWeatherData] = useState([]);
// const API_KEY = import.meta.env;
// console.log(API_KEY.VITE_APP_API_KEY);
const {VITE_APP_API_KEY} = import.meta.env;
//비구조화 활동으로 간편하게 쓰는 코드
// vite로 만든 앱에서 쓰는 환경변수이기에 VITE_APP을 써야함
  // Function 작성---------------------------------------------
const fetchData = async() =>{
  try {
    const response = await axios.get(
      `http://openAPI.seoul.go.kr:8088/${VITE_APP_API_KEY}/json/RealtimeCityAir/1/20/`
      );
      setWeatherData(response.data.RealtimeCityAir.row);
  } catch (error) {
    console.log("데이터를 불러오는데 실패했습니다.")  
  }
  };

  console.log(weatherData);


  // OPEN API 비동기로 불러와 State에 저장하기

  // ComponentDidMount-----------------------------------------
useEffect(() => {
fetchData();
}, [])
// []: 의존성 함수

// const sortedData = weatherData.sort((a, b) => a.PM10-b.PM10).slice(0, 3);
// console.log(sortedData);

const getGradeColor = (IDEX_NM) => {
  switch (IDEX_NM) {
    case "좋음":
      return "green";
    case "보통":
      return "";
    case "나쁨":
      return "red";
    case "점검 중":
      return "-";
  }
};

const getGradeContent = (IDEX_NM) => {
  return IDEX_NM === "" ? "-" : IDEX_NM;
};


  return (
    <HomeContainer>
      <HeadSection>
        <HeadText>서울시 권역별 실시간 대기환경 현황</HeadText>
      </HeadSection>
      <BodySection>
        <DataTable>
          <thead>
            <tr>
              <TableTh>측정일</TableTh>
              <TableTh>측정소명</TableTh>
              <TableTh>미세먼지</TableTh>
              <TableTh>초미세먼지농도</TableTh>
              <TableTh>통합대기환경등급</TableTh>
              <TableTh>통합대기환경지수</TableTh>
            </tr>
          </thead>
          <tbody>
              {weatherData.map((lion, idx)=>(
                <tr 
                key={idx}
                style={{
                  backgroundColor: lion.MSRSTE_NM === "중구" ? "orange":"",
                  color: lion.MSRSTE_NM === "중구" ? "black":"",
                  }}>
                  <TableTd>{lion.MSRDT}</TableTd>
                  <TableTd onClick={() => navigate(`/detail/${lion.MSRSTE_NM}`, { state: lion })}>
                    {lion.MSRSTE_NM}
                  </TableTd>
                  <TableTd>{lion.PM10}</TableTd>
                  <TableTd>{lion.PM25}</TableTd>
                  <TableTd style={{color: getGradeColor(lion.IDEX_NM)}}>{getGradeContent(lion.IDEX_NM)}</TableTd>
                  <TableTd>{lion.IDEX_MVL}</TableTd>
                </tr>
              ))}
            
          </tbody>
        </DataTable>
      </BodySection> 
    </HomeContainer>
  );
};

export default Home;
