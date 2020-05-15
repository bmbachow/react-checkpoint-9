import React from 'react';

class HelloWorld extends React.Component {
  constructor(props) {
  super(props)
	this.state = {
    who: "world",
    }
  }

  updateStatement(input){
    this.setState({
      who: input
    })
  }

  render() {
    return (
    <div>
      <p>Hello, {this.state.who}</p>
      <button className="world" onClick={() => this.updateStatement("world!")}>World</button>
      <button className="friend" onClick={() => this.updateStatement("friend!")}>Friend</button>
      <button className="react" onClick={() => this.updateStatement("react!")}>React</button>
    </div>
      
      )
  }
}

export default HelloWorld