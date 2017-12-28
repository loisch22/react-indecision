class IndecisionApp extends React.Component {
  //pass props if changes to parent branch is needed
  constructor(props) {
    super(props);
    //set as state for values that change
    //bind to current component instance
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three']
    };
  }
    //pass function as prop so child component can use and return outcome back to parent
    //options passes handle function to Options component, can use handle function from parent
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    //index position within array
    const option = this.state.options[randomNum];
    alert(option);
  }
  // addOption(option) {
  //   this.state.options.push(option)
  // }
  //child component gets re-rendered
  render() {
      const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer';

      return (
        <div>
            <Header title={title} subtitle={subtitle}/>
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}/>
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}/>
            <AddOption />
          </div>
      );
  }
}

class Header extends React.Component {
    render() {
      return (
          <div>
              <h1>{this.props.title}</h1>
              <h2>{this.props.subtitle}</h2>
          </div>
      );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                >
                  What should I do?
                </button>
            </div>
        );
    }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
          {
              this.props.options.map((option) => <Option key={option} optionText={option}/>)
          }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.optionText}</li>
        </ul>
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert('Option added: ' + option);
      e.target.elements.option.value = '';
    }
  }
    render() {
        return (
          <div>
              <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
              </form>
          </div>
        );
    }
}
//renders IndecisionApp component into browser
ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
