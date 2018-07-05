import React, { Component } from 'react';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { message: '志利' }
      }
      
      componentDidMount () {
        this.setState({
          name: "裴凡翡"
        });
        console.log("组件渲染完成")
      };

      componentWillMount () {
        console.log("组件将要挂载")
      };
      render () {
        console.log("渲染中")
      };
      componentWillReceiveProps () {
        // props 发生改变时执行
        console.log("状态检测机制")
      };
      // shouldComponentUpdate (nextProps,nextState) {
      //   if (this.props, nextProps || !this.props) {
      //     return false 
      //   }
      //   return true
      //   console.log('是否更新组件')
      // };
      componentWillUpdate (nextProps,nextState) {
        console.log("即将更新")
      };
      componentDidUpdate (nextProps,nextState) {
        console.log("更新完成")
      };
      componentWillUnmount () {
        console.log("卸载完成")
      };
      handleClick = (name) => {
        console.log(this.state.message + name);
      };
    render () {
        return (
            <div>
                Hello {this.state.name}
                {/* bind () */}
                <a href="#" onClick={ this.handleClick.bind(this, '嗯哼') }>Click me</a>
            </div>
        );
    }
}
export default Home