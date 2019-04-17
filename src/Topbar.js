import React, { useContext } from "react";
import { AppContext } from "./index";
import styled from "styled-components";

let TopBar = styled.div`
  background: #f8f8f8;
  height: 80px;
  position: sticky;
  top: 0;
`;

let TopBarContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  max-width: 1140px;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

let Button = styled.button`
  background: #ad65ef;
  color: white;
  padding: 10px 15px;
  font-size: 14px;
  max-height: 50px;
  border-radius: 5px;
`;

let Topbar = () => {
  let { orientation, toggleOrientation } = useContext(AppContext);
  let { videoSize, toggleVideoSize } = useContext(AppContext);
  let orientationButton = () => {
    if (orientation === "left") {
      toggleOrientation("right");
    } else {
      toggleOrientation("left");
    }
  };
  let videoButton = () => {
    if (videoSize === "large") {
      toggleVideoSize("small");
    } else {
      toggleVideoSize("large");
    }
  };
  return (
    <TopBar>
      <TopBarContainer>
        <Button onClick={videoButton}>Video Size: {videoSize} </Button>
        <Button onClick={orientationButton}>Orientation: {orientation} </Button>
      </TopBarContainer>
    </TopBar>
  );
};

export default Topbar;
