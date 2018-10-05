import React from 'react';

const Navbar = () => (
    <div id="navigationBar">
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">
                    <h2 className="navbar-item">ac5</h2>
                </div>
                <div className="navbar-end">
                    <a className="navbar-item">about</a>
                    <a className="navbar-item">work</a>
                    <a className="navbar-item">skills</a>
                </div>
            </div>
            
        </nav>
    </div>
)

export default Navbar;