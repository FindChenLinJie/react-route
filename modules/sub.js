import React from 'react'
import MyComponent from './component';

var data = {
    data: "数据1号",
    myCom:"数据2号"
};

export default React.createClass({
  render() {
    return (        
            <div>
                <MyComponent title={data.data} myCom={data.myCom}> </MyComponent>
            </div>
            )
  }
})
