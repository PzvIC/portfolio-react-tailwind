import './App.css';
import { Routes, Route } from "react-router-dom";
import { MenuBar } from "./components/MenuBar";
import { Favorites } from "./pages/Favorites";
import { Contact } from "./pages/Contact";
import { About } from "./pages/About";
import { useAppSize } from './hooks/useAppSize';
import { PexelsSlider } from './components/PexelsSlider';
import { Header } from './components/Header';
import { Body } from './components/Body';
import { Footer } from './components/Footer';

function Home({ appSize }) {
    return (
        <Body>
            <PexelsSlider appSize={appSize} />
        </Body>
    );
}

function App() {
  const [appSize, setAppSize, setManualOverride] = useAppSize();

  return (
      <div className={`app-container ${appSize}`}>
          <MenuBar appSize={appSize} />

          <Header 
            setAppSize={setAppSize} 
            appSize={appSize} 
            setManualOverride={setManualOverride} 
          />

          <main className="app-fix">
              <Routes>
                  <Route path="/" element={<Home appSize={appSize} />} />
                  <Route path="/favorites" element={<Favorites appSize={appSize} />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/about" element={<About />} />
              </Routes>
          </main>

          <Footer 
            appSize={appSize}
          />
      </div>
  );
}

export default App;

