import React from 'react';
import Header from './Header';
import Footer from './Footer';
export default class Layout extends React.Component{
  constructor() {
    super();
    this.state = {title:"aefaegf"};
  }

  render(){
    setTimeout(() => {
      this.setState({name: "Bob"});
    },5000);
      return(
      <div>
        <Header title={this.state.title}/>
        <Header title={"something else"}/>
        <Footer/>
      </div>
      );
  }
}
