import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

//pass jsx from other component
const Layout = (props) => {
  return (
    <div>
      <p>header</p>
      {props.children}
      <p>footer</p>
    </div>
  );
};

//children prop
ReactDOM.render((
  <Layout>
    <div>
      <h1>Page Title</h1>
      <p>This is my page.</p>
    </div>
  </Layout>
), document.getElementById('app'));
