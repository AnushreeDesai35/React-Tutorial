import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

class AddPagination extends Component{

  constructor(){
    alert("constructor");
    super();
    this.state={
      current:5,
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(page) {
    console.log(page);
    this.props.displayData(page);
  }
  render() {
    return <Pagination onChange={this.onChange} current={this.state.current} total={50} />;
  }
}

export default AddPagination;
