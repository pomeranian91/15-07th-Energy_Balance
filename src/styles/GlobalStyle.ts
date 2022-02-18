import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
      box-sizing: border-box;
      font-family: 'Poppins','Noto Sans KR',"Helvetica","sans-serif";
  }
`;

export default GlobalStyle;
