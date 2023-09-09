import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
h4,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
h1 { 
   display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.36;
  padding: 24px;
  color: #404bbf;
  }

h2 {  
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.36;
  padding: 24px;
  color: #404bbf;
  }
container {
  padding: 15px;
  width: 900px;
}

`;
