const obj = {
  name: 'Ham',
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind({name: 'Andrew'});
console.log(getName());

class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        let options = ['Thing one', 'Thing two', 'Thing four'];

        return (
          <div>
              <Header title={title} subtitle={subtitle}/>
              <Action />
              <Options options={options}/>
              <AddOption options={options}/>
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
  handlePick() {
    alert('handle pick');
  }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
  handleRemoveAll() {
    console.log(this.props.options);
    // alert('remove all');
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
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
