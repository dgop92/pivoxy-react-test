import "normalize.css";
import styled, { ThemeProvider } from "styled-components";
import React from "react";
import { mainTheme } from "./utils/theme";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Main } from "./components/Main";
import { devices } from "./utils/breakpoints";

const PageBase = styled.div`
  background-color: ${(props) => props.theme.palette.background.main};

  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppContentWrapper = styled.div`
  max-width: 1400px;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  display: flex;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: hidden;
  @media ${devices.down.desktop} {
    flex-direction: column;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <PageBase>
        <AppContentWrapper>
          <Header />
          <ContentWrapper>
            <Sidebar />
            <Main />
          </ContentWrapper>
        </AppContentWrapper>
      </PageBase>
    </ThemeProvider>
  );
}
