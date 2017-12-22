class Header extends React.Component {
    render() {
      return (
          <div>
              <h1>Indecision</h1>
              <h2>Put your life in the hands of a computer</h2>
          </div>
      );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>Options component here</li>
                </ul>
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
          <div>
              <form>
                <p>AddOption component here</p>
              </form>
          </div>
        );
    }
}


const jsx = (
    <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    </div>
);


ReactDOM.render(jsx, document.getElementById('app'))