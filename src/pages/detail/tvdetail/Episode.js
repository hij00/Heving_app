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
`;

const Con = styled.div`
  width: 30%;
  height: 300px;
  margin-right: 20px;
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
`;

const Desc = styled.div`
  margin-bottom: 100px;
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
