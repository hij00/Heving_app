import { useState } from "react";
import styled from "styled-components";
import { Container } from "../../../components/Container";
import { imgUrl } from "../../../constants";
import { mainStyle } from "../../../styles/GlobalStyled";

const Bg = styled.section`
  width: 100%;
  height: 100vh;
`;
const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const TextWrap = styled.div`
  width: 500px;
  padding-top: 250px;
`;
const Title = styled.h1`
  font-size: 50px;
  font-weight: 900;
`;
const Desc = styled.h3`
  font-size: 18px;
  font-weight: 500;
  line-height: 30px;
`;
const ItemWrap = styled.ul`
  display: flex;
  align-items: center;
  margin: 20px 0 70px 0;
`;
const Item = styled.li`
  font-size: 16px;
  font-weight: 700;
  margin-right: 20px;
`;
const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Menu = styled.li`
  font-size: 22px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const Point = styled.div`
  width: 150px;
  height: 10px;
  margin-top: 10px;
  border-radius: 30px 30px 0 0;
  background-color: ${mainStyle.logoColor};
`;

export const MainBanner = ({ tvDetail }) => {
  const [show, setShow] = useState("none");
  // 다른 컴포넌트와 클릭이벤트 연동하는방법(예고편 보기 눌렀을때 해당페이지 뜨면서 스크롤 이동)

  const handleClick = () => {
    setShow("block");
    window.scrollTo({
      top: 1000,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Bg
        style={{
          background: `url(${imgUrl}${tvDetail.backdrop_path})`,
        }}
      >
        <BlackBg>
          <Container>
            {tvDetail && (
              <TextWrap>
                <Title>{tvDetail.name}</Title>
                <ItemWrap>
                  <Item>{tvDetail.first_air_date}</Item>
                  <Item>총 {tvDetail.number_of_episodes}회</Item>
                </ItemWrap>
                <Desc>{tvDetail.overview}</Desc>
              </TextWrap>
            )}
          </Container>
          <MenuWrap>
            <Menu>
              회차
              <Point />
            </Menu>
            <Menu onClick={handleClick}>
              예고편
              <Point />
            </Menu>
            <Menu>
              비슷한 컨텐츠
              <Point />
            </Menu>
          </MenuWrap>
        </BlackBg>
      </Bg>
    </>
  );
};