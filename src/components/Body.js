import "../styles/Body.css"

function Body({ children }) {
    return (
        <main className="body-container">
            {children}
        </main>
    );
}

export { Body };
