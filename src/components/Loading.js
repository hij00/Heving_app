import { SpinnerCircular } from "spinners-react";
import styled from "styled-components";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Wrap>
      <SpinnerCircular size={100} />
    </Wrap>
  );
};
