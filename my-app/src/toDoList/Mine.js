import React, { Component } from 'react';
import './Mine.css'
class Mine extends Component {
    constructor (props) {
        super(props)
        this.state = {
            message: '志利利志',
            list : [
                {name: '志利'},
                {name: '利志'},
                {name: '志利利志'},
                {name: '赵志利'},
                {name: '志利赵'}]
        }
    }

    handleClick (e) {
        console.log(this.state.message)
    }

    del(){
        console.log('del')
    }

    render () {
        return (
            <div>
                {/* 箭头函数 */}
                <button onClick={ ()=>{ this.handleClick() } }>你瞅啥？瞅你咋地</button>
                <ul className="NameList">
                    {
                        this.state.list.map((item, index) => {  
                            return (
                                <li key={index}>{ item.name }</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Mine