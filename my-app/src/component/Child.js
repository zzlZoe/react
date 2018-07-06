import React, { Component } from 'react'

class Child extends Component {
    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div>
                 {/* 子向父传值 */}
                 <input onChange={ this.props.handleEmail } />
            </div>
        )
    }
}

export default Child
