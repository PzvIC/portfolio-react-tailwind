import './App.css';
import { Routes, Route } from "react-router-dom";
import {MenuBar} from "./components/MenuBar";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { useAppSize } from './hooks/useAppSize';
import { PexelsSlider } from './components/PexelsSlider';
import { Header } from './components/Header';
import { Body } from './components/Body';

function Home({ appSize, setAppSize, setManualOverride }) {
    return (
        <>
            <Header
                setAppSize={setAppSize}
                appSize={appSize}
                setManualOverride={setManualOverride}
            />
            <Body>
                <PexelsSlider appSize={appSize} />
            </Body>
        </>
    );
}

function App() {
    const [appSize, setAppSize, setManualOverride] = useAppSize();

    return (
        <div className={`app-container ${appSize}`}>

            <MenuBar appSize={appSize} />

            <Routes>
                <Route path="/" element={<Home appSize={appSize} setAppSize={setAppSize} setManualOverride={setManualOverride} />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/faq" element={<FAQ />} />
            </Routes>

        </div>
    );
}

export default App;
