import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  state = {
    id: this.props.id,
    name: this.props.obj[this.props.id].name,
    children: this.props.obj[this.props.id].children,
  };
  render() {
    console.log("in App " + this.state.id);
    return (
      <div id={this.state.id}>
        {this.state.name}
        <br />
        {this.state.children &&
          this.state.children.map((id) => (
            <App key={id} id={id} obj={this.props.obj} />
          ))}
      </div>
    );
  }
}

export default App;
