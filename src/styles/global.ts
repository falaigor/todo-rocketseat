import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
  --purple: #8284FA;
  --purple-dark: #5E60CE;
  --blue: #4EA8DE;
  --blue-dark: #1E6F9F;
  --white: #FFFFFF;
  --gray-700: #0D0D0D;
  --gray-600: #1A1A1A;
  --gray-500: #262626;
  --gray-400: #333333;
  --gray-300: #808080;
  --gray-200: #D9D9D9;
  --gray-100: #F2F2F2;
  --danger: #E25858;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media(max-width: 1080px){
  html {
    font-size: 93.75%;
  }
}

@media(max-width: 720px){
  html {
    font-size: 87.5%;
  }
}

body {
  color: var(--gray-100);
  background: var(--gray-600);
}

body, input, textarea, button {
  font: 400 1rem "Inter",sans-serif;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}
`;
