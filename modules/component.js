import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
// import React from 'react';
// import './index.css';

// class MyComponent extends Component 
// var MyComponent = React.createClass
// 子组件
class MyComponent extends Component {
    // getInitialState() {
    //     return {
    //         defaultProps:"初始值"
    //     }
    // }
    constructor(){ 
        // 定义初始值
        // 添加super相当于将React.Componet new出来
        super();
        this.state={
            textVaule:'这是初始值',
            number:1,
            blue:{
                color:"blue",
                fontSize:"12px"
            },
            arr:[1,2,3,45,6],
            arr2:[
               <p>p1</p>,
               <p>p2</p> 
            ]
        }
    }
    handleAdd(e){
        console.log(e);
        console.log(this);
        var numbers = this.state.number + 1;
        this.setState({
            number: numbers
        });
    }
    // 已插入真实DOM之前
    componentWillMount(){
        console.log(this.state.textVaule);  // 这是初始值 打印之前的数据
        console.log("已插入真实DOM之前");
        // setState是用于设置state中的参数
        this.setState({textVaule:'通过setState修改的值'});
        console.log(this.state.textVaule);  // 这是初始值 打印之前的数据
    }
    // 已插入真实DOM之后
    componentDidMount(){
        console.log("已插入真实DOM之后");
    }
    // 正在被重新渲染之前
    componentWillUpdate(){
        console.log('//将要更新');
    }
    // 正在被重新渲染之后
    componentDidUpdate(){
        console.log('//已经更新');
    }
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
                {
                    // <h1>{this.props.defaultProps}</h1>
                }
                <ul>
                    {this.state.arr.map(function(item,index){
                        return <li key={item}>{item},{index}</li>
                    })}
                </ul>
                <div>{this.state.arr2}</div>

                <input type="button" value="点击" onClick={this.handleAdd.bind(this)} />
                <p>{this.state.number}</p>
                <h1>{this.state.textVaule}</h1>
                
                <h1 className="hello"> Hello world!!! </h1>  <h2 style={this.state.blue}> {this.props.title},{this.props.myCom}</h2> 

                {
                    // <h1>React Router Tutorial</h1>
                    // <ul role="nav">
                    //   <li><Link to="/about">About</Link></li>
                    //   <li><Link to="/repos">Repos</Link></li>
                    // </ul>
                }                  

            </div>
        );
    }
};

export default MyComponent;
