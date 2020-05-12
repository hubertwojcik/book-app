import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
body{
  background: rgb(0,161,167);
  background: radial-gradient(circle, rgba(0,161,167,1) 0%, rgba(4,29,89,1) 100%);
  font-family: 'Montserrat';
}
ul{
  list-style:none;
  margin:0;
  padding:0;
 
}`;
