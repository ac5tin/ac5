import React from 'react';

const Navbar = () => (
    <div id="navigationBar">
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* <h2 className="navbar-item">ac5</h2> */}
                <img id="logo" className="navbar-item" src="https://cdn.discordapp.com/attachments/392845290341924875/497814875511193610/tins_logo.png"  />
                


                <div className="navbar-burger burger" data-target="navBurger"  onClick={e=>{
                e.target.classList.toggle('is-active');
                document.querySelector('#navBurger').classList.toggle('is-active');
            }}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="navbar-menu" id="navBurger">
                <div className="navbar-start"></div>
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