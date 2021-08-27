import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  background: "#f7fafc",
  color: "#7a7a7a",
  gray1: "#1a202c",
};

export const darkTheme = {
  background: "#171923",
  color: "#fafafa",
  gray1: "#fafafa",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
  }
  h1{
    color: ${({ theme }) => theme.gray1};
  }
  .active{
    border-bottom-color: ${({ theme }) => theme.gray1};
    color: ${({ theme }) => theme.gray1};
  }
  
`;
