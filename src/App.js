import './App.css';
import { useState } from 'react';
import { PexelsSlider } from './components/PexelsSlider';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  const [appSize, setAppSize] = useState("desktop");

  return (
    <div className={`app-container ${appSize}`}>
      <Header 
        setAppSize={setAppSize} 
        appSize={appSize}
      />
      <Body>
        <PexelsSlider 
          appSize={appSize} 
        />
      </Body>
    </div>
  );
}

export default App;
