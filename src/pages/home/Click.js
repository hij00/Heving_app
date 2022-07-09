import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";

const Wrap = styled.section``;
const Video = styled.div``;
const TextWrap = styled.div``;
const Title = styled.h1``;
const Desc = styled.h3``;
const Item = styled.p``;

export const Click = () => {
  const [mDetail, setMDetail] = useState();

  //   const movieData = async () => {
  //     const { data } = await movieApi.movieDetail(453395);
  //     console.log(data);
  //   };
  const params = useParams();
  //   const { id } = useParams();
  console.log(params);

  //   useEffect(() => {
  //     const detailData = async () => {
  //       try {
  //         const detail = await movieApi.movieDetail(id);
  //         console.log(detail.data);
  //         // const { data } = await detail;
  //       } catch (error) {}
  //     };
  //     detailData();
  //   }, []);

  return (
    <Wrap>
      <Video></Video>
      <TextWrap>
        <Title></Title>
        <Desc></Desc>
        <Item></Item>
      </TextWrap>
    </Wrap>
  );
};
