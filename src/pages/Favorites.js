import { useEffect, useState } from "react";
import { Search } from "../components/Search";
import "../styles/Favorites.css";
import { ChevronUpIcon } from "@heroicons/react/24/solid";


function Favorites({ appSize }) {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Muestra el botón si el scroll supera, por ejemplo, 150px
            setShowScrollTop(scrollTop > 150);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="favorites-page relative">
            <Search appSize={appSize} />

            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className={`to-top-button to-top-button__${appSize}`}
                    aria-label="Scroll to top"
                >
                    <ChevronUpIcon className="to-top-icon" />
                </button>
            )}
        </div>
    );
}

export { Favorites };
