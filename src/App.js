import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages';
import About from './pages/About';

function App() {

    return (
        <Router>
            <div className="App">
                <div className="cr-header-section header-section header-transparent header-sticky section">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="float-left">
                                    <a href="/" className="header-logo">
                                        <img src="/assets/img/logo/logo-checklist.png" />
                                    </a>
                                </div>
                                <div className="float-right">
                                    <button className="menu-toggle text-white"><i className="ion-android-menu"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="cr-menu-section menu-section">
                    <div className="container">
                        <nav className="cr-menu one-page-menu">
                            <ul>
                                <li className="s2-txt1"><a href="/">home</a></li>
                                {/* <li className="s2-txt1"><a href="#video">video</a></li>
                            <li className="s2-txt1"><a href="#podcast">podcast</a></li>
                            <li className="s2-txt1"><a href="#event">event</a></li> */}
                                {/* <li className="s2-txt1"><a href="/about-me">about me</a></li> */}
                            </ul>
                        </nav>
                    </div>
                </div>

                <Switch>
                    <Route path="/about-me" component={About} />
                    <Route path="/" component={Home} />
                </Switch>

                <div className="cr-footer section">
                    <div className="container">
                        <div className="row">

                            <div className="co-copyright-3 col-md-6 col-xs-12">
                                <p>Copyright &copy; 2021 <a href="http://hastech.company/">weemaraditya</a>. All Rights Reserved.</p>
                            </div>

                            <div className="co-footer-social-3 text-right col-md-6 col-xs-12">
                                <a href="https://www.instagram.com/weemaraditya/" target="_blank"><i className="fa fa-instagram"></i></a>
                                <a href="https://t.me/weemaradityachannel" target="_blank"><i className="fa fa-telegram"></i></a>
                                <a href="https://www.youtube.com/channel/UCZ8exfNLKYBjjod86WEQCjg" target="_blank"><i className="fa fa-youtube-play"></i></a>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </Router>
    );
}

export default App;
