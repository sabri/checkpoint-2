import React from "react";

class Block extends React.Component {
  render() {
    
    return (
      <div style={this.props.style}>
        <img src={this.props.image} width="200px" height="300px"></img>
        <p>my Name is {this.props.nom} </p>
        <p>{this.props.job}</p>
      </div>
    );
  }
}
export default Block;
