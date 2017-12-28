class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.title = 'Visibility Toggle';
    this.text = 'Here it is!'
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>{this.title}</h1>
        <button onClick={this.handleToggleVisibility}>
        {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {(this.state.visibility && true) && <p>{this.text}</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
