import styled from "styled-components";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-bottom: 50px;
  opacity: 0.5;
`;

const Text = styled.h3`
  margin-bottom: 50px;
`;

export const Footer = () => {
  return (
    <Wrap>
      <Line />
      <Text>footer</Text>
    </Wrap>
  );
};
