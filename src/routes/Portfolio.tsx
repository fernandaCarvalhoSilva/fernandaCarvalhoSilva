import React from "react";
import { PortfolioContainer } from "../Portfolio.style";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

function App() {
  return (
    <PortfolioContainer>
      <Sidebar />
      <Content />
    </PortfolioContainer>
  );
}

export default App;
