import "./App.css";
import AppHeader from "./components/AppHeader";
import AppBody from "./components/AppBody";
import ExpandMenu from "./components/ExpandMenu";
import ExpandCategories from "./components/ExpandCategories";
import AppFooter from "./components/AppFooter";
import styled from "styled-components";
import ChatImage from "./assets/chat.svg";
import { useState } from "react";

function App() {
  const [sidebarStatus, setSidebarStatus] = useState();

  return (
    <div className='App'>
      <AppHeader
        sidebarStatus={sidebarStatus}
        showSideBar={() => setSidebarStatus("ExpandMenu")}
        hideSideBar={() => setSidebarStatus(undefined)}
      />
      {sidebarStatus === "ExpandMenu" ? (
        <ExpandMenu showSideBar={() => setSidebarStatus("ExpandCategories")} />
      ) : sidebarStatus === "ExpandCategories" ? (
        <ExpandCategories
          goPreviousSideBar={() => setSidebarStatus("ExpandMenu")}
        />
      ) : (
        <>
          <AppBody />
          <AppFooter />
        </>
      )}
      <AppChatContainer>
        <AppChatImage src={ChatImage} />
      </AppChatContainer>
    </div>
  );
}

export default App;

const AppChatContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 0px;
  z-index: 100;
`;
const AppChatImage = styled.img``;
