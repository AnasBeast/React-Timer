import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./styles.css"
class Timer extends React.Component {
  state = {
    timer: 0
  }
  startTimer = () =>{
    this.setState({timer: this.state.timer+1})
  };

  componentDidMount = ()=>{
    setInterval(()=>{
        this.startTimer();
    },1000)
  }
  render() {
    return (
    <div className='Timer'>
        Timer : {this.state.timer}
    </div>
  )}
  
}

export default Timer;
