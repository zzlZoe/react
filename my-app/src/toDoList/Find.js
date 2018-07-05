import React, { Component } from 'react';

// import Props from '../component/Props'

class Find extends Component {
    constructor(props) {
        super(props)
        this.state = { message: '赵志利', num: 0, arr: [], car: "加减"}

        this.handleClick = this.handleClick.bind(this);
        this.ChangeBtn = this.ChangeBtn.bind(this)
        this.minus = this.minus.bind(this)
        this.add = this.add.bind(this)
    }

    handleClick (e) {
        console.log(this.state.message)
    }

    // 改变文本框的值
    ChangeBtn=(e)=>{
        this.setState( (e) => {
            num: this.state.num
        })
    }

    // 减
    minus () {
        this.setState({
            num: this.state.num - 1
        })
        console.log(this.state.num)
    }
    // 加
    add () {
        this.setState({
           num: this.state.num + 1
        })
        console.log(this.state.num)
    }

    render () {
        return (
            <div>
                {/* <Props data="我是props属性"></Props> */}
                {/* 构造函数内绑定 */}
                <button onClick={ this.handleClick }>你说啥？我听不见</button>
                <h2>{ this.state.car }</h2>
                <div>
                    <button onClick={ (e) => { this.minus(e) } }>-</button>
                    <input type="text" value={this.state.num} />
                    <button onClick={ (e) => { this.add(e) } }>+</button>
                </div>
            </div>
        )
    }
}
export default Find