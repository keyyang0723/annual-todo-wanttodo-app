import * as React from 'react';
import { createGlobalStyle  } from 'styled-components'

const GlobalStyle  = createGlobalStyle `
  // base.css
    html{
      margin: 0;
      padding: 0;
      width:100%;
      height: 100%;
    }
    body {
        margin: 0;
        padding: 0;
        height:100%;
        font-family: 'Arial',YuGothic,'Yu Gothic','Hiragino Kaku Gothic ProN','ヒラギノ角ゴ ProN W3','メイリオ', Meiryo,'ＭＳ ゴシック',sans-serif;
    }
  
`
const BaseSyle:React.FC = () => {
    return(
         <GlobalStyle>
         </GlobalStyle>
        )
}


export default BaseSyle