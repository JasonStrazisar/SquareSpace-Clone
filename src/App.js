import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import StudioHeader from "./studio/components/header";
import Header from "./components/header/headerComponent";
import UpdateHoverButton from './components/header/headerUpdate';
import Panel from './studio/components/panels/editPannel';

const AppContainer = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`
const HeaderContainer = styled.div`
  width: 100vw;
  position: relative;
  z-index: 1;
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
    console.log("pute")
    setIsActive(false);
  };

  return (
    <AppContainer className="App" ref={node}>
  
      <StudioHeader name="Accueil" />
      <Panel isActive={isActive}/>
      <HeaderContainer>
        <Header />
        <UpdateHoverButton openPanel={() => setIsActive(true)} />
      </HeaderContainer>

    </AppContainer>
  );
}

export default App;
