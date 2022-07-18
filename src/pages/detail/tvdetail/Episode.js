import styled from "styled-components";
import { Container } from "../../../components/Container";
import { imgUrl } from "../../../constants";
import { mainStyle } from "../../../styles/GlobalStyled";

const Wrap = styled.div`
  padding-top: 100px;
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

export const Episode = ({ seaData }) => {
  return (
    <Container>
      <Wrap>
        {seaData.map((season) => (
          <AWrap key={season.id}>
            <CWrap>
              <Con
                style={{
                  background: `url(${
                    season.still_path
                      ? `${imgUrl}${season.still_path}`
                      : "https://mapandan.gov.ph/wp-content/uploads/2018/03/no_image.jpg"
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
  );
};
