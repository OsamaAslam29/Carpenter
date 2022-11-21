import React from 'react'
import './Navbar.scss'
import logo from '../../Assets/logo.png'

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

const Navbar = () => {
    const [state, setState] = React.useState({

        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 265 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <div className='main'>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="nav">
                    <div className="mobile_icon" to="/Home">
                        <div>Home</div>
                    </div>
                    <div className="mobile_icon" to="/Home">
                        <div style={{ paddingTop: "6px" }}>About</div>
                    </div>
                    <div className="mobile_icon" to="/Home">
                        <div>Services</div>
                    </div>
                    <div className="mobile_icon" to="/Home">
                        <div>Projects</div>
                    </div>
                    <div className="mobile_icon" to="/Home">
                        <div>Contact Me</div>
                    </div>
                </div>
            </div>

        </Box>
    );

    return (
        <div className='nav-container'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu">
                <div className="web-menu">
                    <div className='left'>
                        <a href="#">Home</a>
                        <a href="#">About Us</a>
                        <a href="#">Services</a>
                        <a href="#">Gallery</a>
                        <a href="#">Reviews</a>
                        <a href="#">Contact Us</a>
                    </div>
                    <div className='right'>
                        <a href="#">Contact Us</a>
                    </div>
                </div>
                <div className="mobile_menu">
                    <div className='ham_none'>
                        {['top'].map((anchor) => (
                            <React.Fragment key={anchor}>

                                <div className="menu">
                                    <MenuIcon onClick={toggleDrawer(anchor, true)} style={{ fontSize: "30px" }} />
                                </div>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    {list(anchor)}
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}
                    </div>


                </div>

            </div>

        </div>
    )
}

export default Navbar
