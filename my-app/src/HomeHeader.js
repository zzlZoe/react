import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class HomeHeader extends Component {
    render () {
        return (
            <div>
                <ul className="tablist">
                    <li>
                        <Link to="/Home">Home</Link>
                    </li>
                    <li>
                        <Link to="/Find">Find</Link>
                    </li>
                    <li>
                        <Link to="/Mine">Mine</Link>
                    </li>
                </ul>
            </div>
        )
    }
}
export default HomeHeader