var poem = {
    lines: ['I write, erase, rewrite', 'Erase again, and then', 'A poppy blooms.']
};

function Poem() {
    return React.createElement(
        'article',
        null,
        poem.lines.map(function (line, index) {
            return React.createElement(
                React.Fragment,
                { key: "line" + index },
                React.createElement(
                    'p',
                    null,
                    line
                ),
                index === 0 || index === 1 ? React.createElement('hr', null) : null
            );
        })
    );
}

export default function App() {
    return React.createElement(Poem, null);
}

// connecting react
var rootNode = document.getElementById("reactRoot");
var root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App, null));