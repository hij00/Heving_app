import styled from "styled-components";
import { Container } from "../../../components/Container";

const IFrame = styled.iframe`
  width: 100%;
  height: 700px;
  margin-top: 100px;
`;

export const Video = ({ videoData }) => {
  return (
    <>
      <Container>
        {videoData ? (
          <IFrame
            src={`https://www.youtube.com/embed/${videoData}`}
            allowfullscreen
          ></IFrame>
        ) : null}
      </Container>
    </>
  );
};
