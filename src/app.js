//es6 component is just a class
//extend to use React.Component class with Header class/component
//React components MUST have uppercase
//That's how it differentiates normal HTML element/component

class Header extends React.Component {
    //React components require render
    render() {
      return <p>This is from Header</p>;
    }
}

//pass in Header React.Component
const jsx = (
    <div>
        <h1>Title</h1>
        <Header/>
        <Header/>
        <Header/>
        <Header/>
    </div>
);


ReactDOM.render(jsx, document.getElementById('app'))