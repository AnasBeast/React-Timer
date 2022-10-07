import logo from './logo.svg';
import './App.css';
import React from 'react';
import "./styles.css"
import Timer from './counter';
class App extends React.Component {
  state = {
    fullName: "Anas Boussehmine",
    bio: "Web Developer",
    profession: "Student",
    imgSrc: "/profileImg.jfif",
    show: false,
  }
  handleClick =()=>{this.setState({show:!this.state.show})}
  render() {
    return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",height:"100vh","backgroundImage":"url(https://gomytech.gomycode.co/content/images/2020/12/bah-launch-01-min.jpg)","backgroundSize":"cover"}}>
      {this.state.show &&
      <div className='profile'>
        <img src={this.state.imgSrc} alt="anas-img" style={{borderRadius:"50%",width:"20%"}}/>
        <h1 style={{textDecoration: "underline",color:"white",fontWeight:"bold",fontSize:"36px"}}>
          {this.state.fullName}</h1>
        <h1>{this.state.bio}</h1>
        <h1>{this.state.profession}</h1>
        <Timer/>
      </div>}
      <button
       onClick={this.handleClick}>Show Profile</button>
    </div>
  )}
  
}

export default App;
