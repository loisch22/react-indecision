class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    };
  }
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
  handleAddOption(option) {
    //use concat so you don't manipuate state
    //need prevState aka current options array
    this.setState((prevState) => {
      return {
        //can pass ([option]) or (option)
        options: prevState.options.concat(option)
      };
    });
  }

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
            <AddOption
              handleAddOption={this.handleAddOption}/>
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
  //keep handleAddOption since makes sense to live here not in parent
  //set up constructor since referring to this
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
  }
  //two handleAddOption - one lives only in child, other calling from parent using props
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      this.props.handleAddOption(option);
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

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
