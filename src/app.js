const poem = {
    lines: [
        'I write, erase, rewrite',
        'Erase again, and then',
        'A poppy blooms.'
    ]
};

function Poem() {
    return (
        <article>
            {poem.lines.map((line, index) =>
                <React.Fragment key={"line" + index}>
                    <p>
                        {line}
                    </p>
                    {(index === 0 || index === 1) ? <hr /> : null}
                </React.Fragment>
            )}
        </article>
    );
}

export default function App() {
    return <Poem />;
}

// connecting react
const rootNode = document.getElementById("reactRoot");
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);