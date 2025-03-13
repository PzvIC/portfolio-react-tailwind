import './App.css';
import { PexelsSlider } from './components/PexelsSlider';
import { Header } from './components/Header';
import { Body } from './components/Body';

function App() {
  return (
    <>
      <Header/>
      <Body>
        <PexelsSlider/>
      </Body>
    </>
  );
}

export default App;
