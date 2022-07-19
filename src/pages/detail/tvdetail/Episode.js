import styled from "styled-components";
import { Container } from "../../../components/Container";
import { miniImg, noImg } from "../../../constants";
import { mainStyle } from "../../../styles/GlobalStyled";

const Wrap = styled.div`
  padding-top: 20px;
`;

const AWrap = styled.div``;

const CWrap = styled.div`
  display: flex;
  justify-content: baseline;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const Con = styled.div`
  width: 30%;
  height: 300px;
  margin-right: 20px;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const TextWrap = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const Desc = styled.div`
  margin-bottom: 100px;
  @media screen and (max-width: 500px) {
    margin-bottom: 0px;
    margin-top: 20px;
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
    opacity: 0.7;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${mainStyle.logoColor};
  margin: 30px 0;
  opacity: 0.3;
`;

const Text = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const Episode = ({ seaData }) => {
  return (
    <>
      {seaData && (
        <Container>
          <Text>에피소드</Text>
          <Wrap>
            {seaData.map((season) => (
              <AWrap key={season.id}>
                <CWrap>
                  <Con
                    style={{
                      background: `url(${
                        season.still_path
                          ? `${miniImg}${season.still_path}`
                          : `${noImg}`
                      }) no-repeat center / cover`,
                    }}
                  />
                  <TextWrap>
                    <Title>
                      {season.episode_number}화. {season.name}
                    </Title>
                    <Desc>{season.overview}</Desc>
                  </TextWrap>
                </CWrap>
                <Line />
              </AWrap>
            ))}
          </Wrap>
        </Container>
      )}
    </>
  );
};
