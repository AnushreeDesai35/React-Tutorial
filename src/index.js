/*import React from 'react';
import ReactDOM from 'react-dom';
import Layout from "./components/Layout";

ReactDOM.render(<Layout/>,document.getElementById('app'));
*/

import {createStore} from 'redux';

reducer(state,action){
return "foo";
}

const store  = createStore(reducer, 0);

store.subscribe(()=> {
  console.log("Store changed : "+store.getState());
})
