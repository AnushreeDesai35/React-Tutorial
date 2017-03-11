// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route,hashHistory} from 'react-router';
//import Home from './components/Home';
import About from './components/About';
import Car from './components/Car';
import AddPagination from './components/AddPagination';
import $ from 'jquery';

class Home extends Component {

  constructor(){
    alert("constructor");
    super();
    this.state={
      jsonData:[],
    };
    this.datarow = this.datarow.bind(this);
  }

  componentDidMount()
  {
    alert("componentDidMount")
    $.getJSON("./data.json",function(result){
			alert("result");
      this.setState({jsonData:result});
		});
    console.log("result : "+this.state.jsonData);
  }

datarow(data,index){
return(
  <tr key={index}>
    <td>{data.name}</td>
    <td>{data.id}</td>
  </tr>
);
}

    render(){
      alert("render");
      //let myData = this.state.jsonData;
      //console.log('myData : '+myData);
      let jsonData = [
    { name : 'Anushree', id: '1'},
    { name : 'Syed', id : '2' },
    { name : 'Sneha', id : '3' },
    { name : 'Hemant', id : '4' },
    { name : 'Divyesh', id: '5'},
    { name : 'Shreya', id : '6' },
    { name : 'Hiral', id : '7' },
    { name : 'Priyansh', id : '8' }
];
//console.log(myData);
return(
<div>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
      </tr>
    </thead>
    <tbody>
        {jsonData.map(this.datarow)}
    </tbody>
</table>

<AddPagination/>
</div>
);
}
}
render(<Home/>,document.getElementById('container'));
