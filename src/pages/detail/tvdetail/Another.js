import styled from "styled-components";
import { miniImg, noImg } from "../../../constants";
import { Link } from "react-router-dom";
import { Container } from "../../../components/Container";

const Wrap = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 30px;
  row-gap: 50px;
  @media screen and (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Con = styled.div``;

const Bg = styled.div`
  height: 400px;
  @media screen and (max-width: 500px) {
    height: 270px;
  }
`;

const TextWrap = styled.div``;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const Title = styled.h3`
  font-size: 22px;
  @media screen and (max-width: 500px) {
    font-size: 18px;
    line-height: 22px;
  }
`;

const Item = styled.p`
  font-size: 16px;
  opacity: 0.7;
  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const Text = styled.h1`
  font-size: 40px;
  font-weight: 900;
  margin-top: 100px;
  @media screen and (max-width: 500px) {
    font-size: 25px;
  }
`;

export const Another = ({ pop }) => {
  return (
    <>
      {pop && (
        <Container>
          <Text>다른 TV시리즈</Text>
          <Wrap>
            {pop.map((pop) => (
              <Con key={pop.id}>
                <Link to={`/tv_detail/${pop.id}`}>
                  <Bg
                    style={{
                      background: `url(${
                        pop.backdrop_path
                          ? `${miniImg}${pop.backdrop_path}`
                          : `${noImg}`
                      }) no-repeat center / cover`,
                    }}
                  ></Bg>
                </Link>
                <TextWrap>
                  <TitleWrap>
                    <Title>{pop.name}</Title>
                    <Item>{pop.original_language}</Item>
                  </TitleWrap>
                  <Item>{pop.first_air_date}</Item>
                </TextWrap>
              </Con>
            ))}
          </Wrap>
        </Container>
      )}
    </>
  );
};
