import React, {Component} from 'react';
import Shape from './Shape'

class Selector extends Component {

  constructor() {
    super();
    this.state = {
      selectedShape: 'square', //selectedShape is our state, selectShape is the method
    }
  }

  selectShape = (shapeName) => {
    this.setState({
      selectedShape: shapeName,
    })
  }

  render() {
    return (
      <div className="container">
        <div className="navbar">
          <div>Selected: <span>What goes here?</span></div>
        </div>
        <div className="shape-list"> 
        Add the shape component here!
        <Shape shape="square" selectShape={this.selectShape}/>
        <Shape shape="circle" selectShape={this.selectShape}/>
        <Shape shape="triangle" selectShape={this.selectShape}/>
        {/* <Shape shape="square"/>
        <Shape shape="circle"/>
        <Shape shape="triangle"/> */}
      </div>
      </div>
    )
  }
}

export default Selector;

// in this section, use HTML names
// fill in class Selector, then Shape.js, and then add shape in selector class
// then add properties to Shape