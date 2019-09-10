import React, { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  color: red;
  background-color: ${(props: interfaceProps) => props.main};
`
interface interfaceTheme {
  main: string,
}

Button.defaultProps = {
    main: "#000fff"
}

interface interfaceProps {
  onClick: () => void;
  main: string;
}

const SimpleButton: FC<interfaceProps> = (props: interfaceProps) => {
  return(
  <Button {...props}>Done</Button>
  )
}

export { SimpleButton, interfaceProps};
