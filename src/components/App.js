import React from 'react';

const App = () => (<Counter />);

class Counter extends React.Component
{
  constructor(props){
    super(props)
    console.log(this.state)
    this.state = {count: 0}

  }

  handlePlusButton = () => {
    const currentCount = this.state.count;
    this.setState({count: currentCount + 1 })
  }

  handleMinusButton = () => {
    const currentCount = this.state.count;
    this.setState({count: currentCount - 1 })
  }

  render(){
    console.log(this.state)
  return(
  <React.Fragment>
    <div>
      count: {this.state.count}
    </div>
    <button onClick={this.handlePlusButton}>+1</button>
    <button onClick={this.handleMinusButton}>-1</button>
  </React.Fragment>
  )
  }
}
export default App;
