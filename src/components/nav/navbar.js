import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => (
    <div id="navigationBar">
        <nav className="navbar is-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                {/* <h2 className="navbar-item">ac5</h2> */}
                <img id="logo" className="navbar-item" alt="AC" src="https://i.imgur.com/5qo59os.png"  />
                


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
                    <AnchorLink className="navbar-item" href="#about">about</AnchorLink>
                    <AnchorLink className="navbar-item" href="#work">work</AnchorLink>
                    <AnchorLink className="navbar-item" href="#skills">skills</AnchorLink>
                </div>
                
            </div>
            
            
        </nav>
    </div>
)

export default Navbar;