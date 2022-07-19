import styled from "styled-components";
import { imgUrl, num, noImg } from "../../../constants";

const Main = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Center = styled.div`
  width: 100%;
`;
const Movie = styled.div`
  height: 80vh;
  position: relative;
`;
const TextWrap = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 50%;
  margin: 0 25%;
  z-index: 99;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p`
  font-size: 22px;
  opacity: 0.7;
  margin: 10px 0 50px 0;
`;
const Bg = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
`;

export const Banner = ({ play }) => {
  return (
    <>
      <Main>
        <Center>
          <Movie
            style={{
              background: `url(${
                play[num].backdrop_path
                  ? `${imgUrl}${play[num].backdrop_path}`
                  : `${noImg}`
              }) no-repeat center / cover`,
            }}
          >
            <TextWrap>
              <Title>{play[num].title}</Title>
              <Desc>{play[num].release_date}</Desc>
              {/* 장르를 적을때 아이디로 표시되있는거 글로 바꾸는 방법 */}
            </TextWrap>
            <Bg />
          </Movie>
        </Center>
      </Main>
    </>
  );
};
