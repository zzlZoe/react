

// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// 无状态函数式组件

// function HelloComponent(props, /* context */) {
//     return <div>Hello {props.name}</div>
//   }

// ReactDOM.render(<HelloComponent name="Sebastian" />, mountNode) 

// 类组件

// // class Props extends Component () {
// //     render () {
// //         return (
// //             <div>
// //                 {this.props.data}
// //             </div>
// //         );
// //     }
// // }
// // export default Props;

// React.createClass

// var Props = React.createClass({
//     render:function(){
//         return (
//             <div className="Props">
//                {this.props.data}
//             </div>
//         );
//     }
// }
// );
// module.exports = Props

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
class Props extends Component {
   constructor (props) {
       super(props)
       this.state = {
           counter: props.initValue
       }
       this.minus = this.minus.bind(this)
       this.add = this.add.bind(this)
   }

// 减
    minus (e) {
        this.setState({
            counter: this.state.counter - 1
        })
    }
// 加
    add (e) {
        this.setState({
            counter: this.state.counter + 1
        })
    }
   render () {
       return (
            <div>
                <button onClick={ (e) => { this.minus(e) } }>-</button>
                <span style={{width: "50px",display: "inline-block"}}>{this.state.counter}</span>
                <button onClick={ (e) => { this.add(e) } }>+</button>
            </div>
       )
   }
}

export default Props


