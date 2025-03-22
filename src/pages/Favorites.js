import { Search } from "../components/Search";
import "../styles/Favorites.css"

function Favorites({ appSize }) {
    return (
        <div className="favorites-page">
            <Search appSize={appSize} />
        </div>
    );
}

export { Favorites };
