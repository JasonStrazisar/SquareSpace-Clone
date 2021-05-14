import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import StudioHeader from "./studio/components/header";
import Header from "./components/header/headerComponent";
import UpdateHoverButton from './components/header/headerUpdate';
import Panel from './studio/components/panels/editPannel';
import Section from './components/section/sectionComponent';
import VideoComponent from "./components/atoms/videoComponent";

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`
const HeaderContainer = styled.div`
  width: 100%;
  z-index: 1;
  position: absolute;
  left: 0;
`

function App() {

  const [isActive, setIsActive] = useState(false);
  const node = useRef();

  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isActive]);

  const handleClickOutside = (e) => {
    if (node.current && node.current.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    setIsActive(false);
  };

  return (
    <AppContainer className="App" >
  
      <StudioHeader name="Accueil" />
      
      <HeaderContainer ref={node}>
        <Panel isActive={isActive} />
        <Header />
        <UpdateHoverButton openPanel={() => setIsActive(true)} />
      </HeaderContainer>
      <Section />

      
    </AppContainer>
  );
}

export default App;
