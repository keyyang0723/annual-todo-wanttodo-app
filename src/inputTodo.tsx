// import React, { FC } from "react";
// import styled from "styled-components";

// const Input = styled.input.attrs({
//     type: 'text',
// })`
//   color: red;
//   background-color: ${(props: interfaceProps) => props.main};
// `
// interface interfaceTheme {
//   main: string,
// }

// Input.defaultProps = {
//     main: "#000fff"
// }

// interface interfaceProps {
//   main: string;
// }

// const InputTodo: FC<interfaceProps> = (props: interfaceProps) => {
//   return(
//   <Input {...props}/>
//   )
// }

// export { InputTodo };


import React, { FC } from "react";
import styled from "styled-components";

const Input = styled.input.attrs({
    type: 'text',
})`
  /*基本のスタイル*/
    width: 20px;
    height: 20px;
    border: solid 2px #666666;
    border-radius: 25px;
    /*テキスト入力のエリアを調整*/
    padding: 20px;
    /*虫眼鏡アイコンを背景で指定*/
    background-image: url("../img/search.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25px;
    /*フォーカスしたときのトランジション設定 すべてのプロパティが0.5秒で切り替わる*/
    transition: all 0.5s;
    &:focus {
        /*フォーカスした時に横に伸ばす*/
        width: 300px;
        /*フォーカスした時の虫眼鏡アイコンの位置調整*/
        background-position: 96% 50%;
        /*テキスト入力が虫眼鏡アイコンに被らないように*/
        padding-right: 50px;
    }
`

const InputTodo: FC = () => {
  return(
  <Input placeholder="title"/>
  )
}

export { InputTodo };