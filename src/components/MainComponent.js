import React, { Component } from "react";
import About from './AboutComponent';
import Carousel from './CarouselComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Routes, Route } from 'react-router-dom';

class Main extends Component {
    render () {
        return (
            <div>
                <Header />
                    <Routes>
                        <Route path='/home' render={() => <Header />} />
                        {/* <Route path='/aboutus' render={() => <About />} />
                        <Route path='/example' render={() => <Sample />} />
                        <Route path='/contactus' render={() => <Footer />} /> */}
                    </Routes>
            </div>
        )
    }
};

export default Main;