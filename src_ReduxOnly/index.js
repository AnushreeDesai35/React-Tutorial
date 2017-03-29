/*import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Layout from "./components/Layout";

ReactDOM.render(<Layout/>,document.getElementById('app'));
*/

/*import {createStore} from 'redux';

reducer(state,action){
return "foo";
}

const store  = createStore(reducer, 0);

store.subscribe(()=> {
  console.log("Store changed : "+store.getState());
})*/
import { createStore } from 'redux';

//below is the reducer
const counter = (state = 0,action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};


const store = createStore(counter);


const show = ()=> {
  document.body.innerText = store.getState();
}

store.subscribe(show); // I did not understand this part
show();

document.addEventListener('click',() => {
  store.dispatch({type: "INCREMENT"});
});
