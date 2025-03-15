import './App.css';
import { useAppSize } from './hooks/useAppSize';
import { PexelsSlider } from './components/PexelsSlider';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  const [appSize, setAppSize, setManualOverride] = useAppSize();

  return (
    <div className={`app-container ${appSize}`}>
      <Header 
        setAppSize={setAppSize} 
        appSize={appSize}
        setManualOverride={setManualOverride}
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
