console.log("App.js is running!");

const app = {
    title: 'Indecision App',
    subtitle: 'Put your lives in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    //stops full page refresh and allows code below to run
    e.preventDefault();

    //where event starts (form) - gets target thats an element called `option` get its value
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderOptions();
    }
};

const onRemoveAll = () => {
    app.options = [];
    renderOptions();
}


const appRoot = document.getElementById('app');

const renderOptions = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
                <button onClick={onRemoveAll}>Remove All</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderOptions();




