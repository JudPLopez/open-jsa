import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav } from 'reactstrap';
import cover from '../app/assets/img/cover.png';

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isNavOpen: false,
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render() {
        return (
            <React.Fragment>
                <div className='jumbotron'>
                    <div className="container">
                        <div className="row">
                            <div className='col'>
                                <h1>Open JSA</h1>
                                <h2>Make safety a fundamental part of the way you do business.</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar primary sticky='top' expand='md'>
                    <div className='container'>
                        <NavbarBrand className='mr-auto' href='/'><img src={cover} height='30' width='30' alt='Open JSA Logo' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className='nav-link' to='/home'>
                                        <i className='fa fa-home fa-lg' /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/aboutus'>
                                        <i className='fa fa-home fa-lg' /> About
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/example'>
                                        <i className='fa fa-home fa-lg' /> Sample JSA
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className='nav-link' to='/contactus'>
                                        <i className='fa fa-home fa-lg' /> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar> 
            </React.Fragment>
        );
    }
}

export default Header; 