import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #454545;
  color: #fff;
`;

interface Props {
  onClick: () => void;
}

const SimpleButton: FC<Props> = () => <Button>Done</Button>;

export default SimpleButton;
