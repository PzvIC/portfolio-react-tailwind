import { Search } from "../components/Search";

function Favorites({ appSize }) {
    return (
        <div className="favorites-page">
            <h1 className="favorites-title">My Favorite Photos</h1>
            <Search appSize={appSize} />
        </div>
    );
}

export { Favorites };
