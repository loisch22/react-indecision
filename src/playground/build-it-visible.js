const app = {
    title: 'Visibility Toggle',
    text: 'Hey this works!',
    show: 'Show details',
    hide: 'Hide details'
};

let visibility = false;

const onShowDetails = () => {
    if(visibility === false) {
        visibility = true;
    } else {
        visibility = false;
    }
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
            <p>{visibility ? 'Hey it works!' : ''}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

render();

