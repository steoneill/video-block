import React, { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom";
import { Scene, Controller } from "react-scrollmagic";
import LargeImageSRC from "./video_large.png";
import TopBar from "./Topbar";
import styled, { createGlobalStyle } from "styled-components";

export const AppContext = React.createContext();

let ScrollArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: sans-serif;
  height: 400px;
  text-transform: uppercase;
  letter-spacing: 2px;
  flex-direction: column;

  h1 {
    font-weight: 900;
    color: #191940;
    font-size: 40px;
  }
`;

let LargeImage = styled.img`
  width: 100%;
`;

let ImageSize = styled.span`
  z-index: 10;
  ${props => console.log(props.videoSize)};
  ${props =>
    props.videoSize === "large"
      ? "grid-column: 2 / span 22;"
      : "grid-column: 5 / span 16;"}
`;

export let Container = styled.div`
  display: grid;
  grid-template-columns: repeat(24, 1fr);
  grid-gap: 10px;
`;

let Global = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`;

let VideoWrapper = styled.section`
  @media screen and (min-width: 1024px) {
    height: calc(100vh - 80px);
  }
  height: 130%;
  max-height: 100%;
  max-width: 100vw;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    @media (min-width: 1024px) {
      content: "";
    }
    background: #e4e2e3;
    top: 0;
    width: 50%;
    height: 100%;
    position: absolute;
    transition: 0.3s all;
    ${props => (props.orientation === "left" ? "left: 0;" : "right: 0;")}
  }
`;

let App = () => {
  let [orientation, toggleOrientation] = useState("left");
  let [videoSize, toggleVideoSize] = useState("large");
  return (
    <>
      <Global />
      <AppContext.Provider
        value={{ orientation, toggleOrientation, videoSize, toggleVideoSize }}
      >
        <TopBar />
        <ScrollArea>
          <h1>Scroll Down</h1>
          <p>This has just been added for the parralax effect.</p>
        </ScrollArea>
        <VideoWrapper orientation={orientation}>
          <Container>
            <ImageSize videoSize={videoSize}>
              <LargeImage src={LargeImageSRC} />
            </ImageSize>
          </Container>
        </VideoWrapper>
      </AppContext.Provider>
    </>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
