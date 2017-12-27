const app = {
    title: 'Visibility Toggle',
    text: 'Hey this works!'
};

let visibility = false;

const onShowDetails = () => {
    visibility = !visibility;
    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onShowDetails}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {(visibility && true) && <p>{app.text}</p> }
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

