import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html{
  height:100%;
}
*{
  box-sizing:border-box;
}
body{
  height:inherit;
  margin:0;
  font-family: 'Montserrat', sans-serif !important;
  color: #74767b;
  #root{
  height:100%;
}
button{
  &:focus{
    outline:none;
  }
}
.search{
  ${'' /* background: rgb(123,67,151); */}
${
  '' /* background: linear-gradient(90deg, rgba(123,67,151,1) 0%, rgba(220,36,48,1) 50%); */
}
background: rgb(30, 60, 114);
  background: linear-gradient(
    90deg,
    rgba(30, 60, 114, 1) 0%,
    rgba(42, 82, 152, 1) 50%
  );
}
}

`;

export default GlobalStyle;
