import React, { FC } from "react";
import styled from "styled-components";

const Input = styled.input.attrs({
    type: 'text',
})`
  color: red;
  background-color: ${(props: interfaceProps) => props.main};
`
interface interfaceTheme {
  main: string,
}

Input.defaultProps = {
    main: "#000fff"
}

interface interfaceProps {
  main: string;
}

const InputTodo: FC<interfaceProps> = (props: interfaceProps) => {
  return(
  <Input {...props}/>
  )
}

export { InputTodo };
