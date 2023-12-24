import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    font-family: 'Poppins', sans-serif;
}
body::-webkit-scrollbar {
  width: .5em;
 
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #888;
}
 
body::-webkit-scrollbar-thumb {
  background-color: #101010;
 
  
}

h1{
    color: #252525;
}
a{
    text-decoration: none;
    
}
ul{
    list-style: none;
}

`;
