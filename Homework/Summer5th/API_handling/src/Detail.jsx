// Detail.jsx

import { useLocation, useParams } from "react-router";
import { ContentBox, Whole,FirstSection, SecondSection, Location, Date, Data, Grade } from "./components/DetailStyle";

const Detail = () => {
  {

    const location = useLocation();
    const lionData = location.state;
    const { MSRDT, PM10, PM25, O3, NO2,CO,SO2, IDEX_MVL, IDEX_NM } = location.state;

    // MSRDT를 8글자만 보이도록
    const MSRDT_short = MSRDT.slice(0, 8);
  
  return(
    <>
    <Whole>
      <ContentBox>
        <FirstSection>
            <Location>
              {lionData && `${lionData.MSRRGN_NM} | ${lionData.MSRSTE_NM}`}
            </Location>

            <Date>
                  <p>{MSRDT_short}</p>
            </Date>
        </FirstSection>

        <SecondSection>
            <Data>
                  <p>미세먼지(㎍/㎥): {PM10}</p>
                  <p>초미세먼지농도(㎍/㎥): {PM25}</p>
                  <p>오존(ppm): {O3}</p>
                  <p>이산화질소농도(ppm): {NO2}</p>
                  <p>일산화탄소농도(ppm): {CO}</p>
                  <p>아황산가스농도(ppm): {SO2}</p>
                  <p>통합대기환경지수: {IDEX_MVL}</p>
            </Data>
            <Grade IDEX_NM={IDEX_NM}>
              <p>통합환경대기등급</p>
              <p>{IDEX_NM}</p>
            </Grade>
        </SecondSection>

      </ContentBox>
  </Whole>
  </>
  );
};
};

export default Detail;
