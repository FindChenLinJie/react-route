import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router'

// import logo from './logo.svg';
import './App.css';
import MyComponent from './component';
// import { Router, Route, Link } from 'react-router';

var data = {
    data: "数据1号",
    myCom:"数据2号"
};


// 父组件
class App extends Component {
    render() {
        return (
            // <div className="App">
            //   <div className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <h2>Welcome to React</h2>
            //   </div>
            //   <p className="App-intro">
            //     To get started, edit <code>src/App.js</code> and save to reload.
            //   </p>
            // </div>
            <div>
                <MyComponent title={data.data} myCom={data.myCom}> </MyComponent>
            </div>

        );
    }
}


React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('root'));

export default App;
