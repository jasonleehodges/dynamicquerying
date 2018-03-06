let favs = 0;
const addOne = () => {
    favs++;
    render();
};
const subOne = () => {
    favs--;
    render();
};
let dataset_columns = ["Month", "Sales", "Reps", "RepIDs"];
let jsx_columns = dataset_columns.map((column) => {
    return <li key={column}>{column}</li>;
})

const render = () => {
    const template = (
        <div>
            <p>React template!</p>
            <p>Favorites: {favs}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={subOne}>-1</button>
            <ul>
                {jsx_columns}
            </ul>
        </div>
    );
    const element = document.getElementById("main");

    ReactDOM.render(template, element);
};

render();