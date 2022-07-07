import styled from "styled-components";
import { imgUrl, num } from "../../constants";

const Wrap = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  position: relative;
  width: 25%;
  height: 80vh;
`;
const Right = styled.div`
  position: relative;
  width: 25%;
  height: 80vh;
`;
const Cover = styled.div`
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  z-index: 9;
`;
const UpComing = styled.div`
  height: 80vh;
  z-index: 8;
`;
const Movie = styled.div`
  width: 50%;
  height: 80vh;
  position: relative;
`;
const Tv = styled.div`
  height: 80vh;
`;
const TextWrap = styled.div`
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 50px;
`;
const Desc = styled.p``;

export const MainBanner = ({ play, up, tvPop }) => {
  return (
    <Wrap>
      <Left>
        <Cover />

        <UpComing
          style={{
            background: `url(${imgUrl}${up[num].backdrop_path}) no-repeat center/cover`,
          }}
        ></UpComing>
      </Left>
      <Movie
        style={{
          background: `url(${imgUrl}${play[num].backdrop_path}) no-repeat center/cover`,
        }}
      >
        <TextWrap>
          <Title>{play[num].title}</Title>
          <Desc>{play[num].release_date}</Desc>
          {/* 장르를 적을때 아이디로 표시되있는거 글로 바꾸는 방법 */}
          <Desc>{play[num].vote_average}</Desc>
        </TextWrap>
      </Movie>
      <Right>
        <Cover />
        <Tv
          style={{
            background: `url(${imgUrl}${tvPop[num].backdrop_path}) no-repeat center/cover`,
          }}
        ></Tv>
      </Right>
    </Wrap>
  );
};
