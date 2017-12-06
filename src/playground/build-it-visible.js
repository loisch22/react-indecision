const app = {
    title: 'Visibility Toggle'
};

const template = (
  <div>
      <h1>{app.title}</h1>
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);