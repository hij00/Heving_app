import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { tvApi } from "../api";
import { Loading } from "../components/Loading";
import { imgUrl, num, noImg } from "../constants";
import { mainStyle } from "../styles/GlobalStyled";

const Wrap = styled.section`
  width: 100%;
  height: 100vh;
`;
const Black = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.7;
`;
const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
  z-index: 99;
  padding-top: 300px;
`;
const Title = styled.h1`
  font-size: 55px;
  font-weight: 900;
  color: ${mainStyle.logoColor};
  margin-bottom: 40px;
`;
const Sub = styled.h3`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 20px;
`;
const Desc = styled.h3`
  font-size: 18px;
  font-weight: 300;
  width: 450px;
  text-align: center;
  margin-bottom: 30px;
  opacity: 0.7;
`;
const Icon = styled.div`
  a {
    display: flex;
    max-width: 300px;
    svg {
      margin-right: 20px;
      color: ${mainStyle.logoColor};
    }
  }
`;
const Text = styled.h3``;

export const NotFound = () => {
  const [air, setAir] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tvData = async () => {
      try {
        const {
          data: { results },
        } = await tvApi.onAir();
        setAir(results);

        setLoading(false);
      } catch (error) {}
    };
    tvData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Wrap
            style={{
              background: `url(${
                air[num].backdrop_path
                  ? `${imgUrl}${air[num].backdrop_path}`
                  : `${noImg}`
              }) no-repeat center / cover`,
            }}
          >
            <Black>
              <TextWrap>
                <Title>404 Error</Title>
                <Sub>페이지를 찾을 수 없습니다.</Sub>
                <Desc>
                  페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다.
                  입력하신 주소가 정확한지 다시 한번 확인해주시기 바랍니다.
                </Desc>
                <Icon>
                  <Link to={"/"}>
                    <FontAwesomeIcon icon={faHouse} />
                    <Text>홈으로 가기</Text>
                  </Link>
                </Icon>
              </TextWrap>
            </Black>
          </Wrap>
        </>
      )}
    </>
  );
};
