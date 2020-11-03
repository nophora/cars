import React, { Component } from 'react'
import './cars.css'
import Home from './components/body/home'
import Types from './components/body/types'
import Selected from './components/body/selected'
import Sign from './components/body/sign'
import Privacy from './components/body/privacy'
import P1 from './p1.png'
import P4 from './p4.png'
import P5 from './p5.png'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Cars extends Component {
    state = {}




    render() {
        const date = new Date();
        const year = date.getFullYear()
        return (
            <Router>
                <div className="cars">
                    <Switch>

                        <Route path="/" exact component={Home} />
                        <Route path="/type_s/:id" component={Types} />
                        <Route path="/select/:id" component={Selected} />
                        <Route path="/signin" component={Sign} />
                        <Route path="/privacy_policy" component={Privacy} />





                    </Switch>
                    <div className="desk">
                        <div className="rows">Privacy Policy</div>
                        <div className="row">
                            <div className="divc">
                                <img src={P1} alt='ohk' className='ftp' />
                                <p className='ps'>nophora nhapho</p>
                            </div>
                            <div className="divc">
                                <img src={P4} alt='ohk' className='ftp' />
                                <p className='ps'>nophra nhapho</p>

                            </div>
                            <div className="divc">
                                <img src={P5} alt='ohk' className='ftp' />
                                <p className='ps'>nophora.nn@gmail.com<br />nophora.nn@hotmail.com</p>
                            </div>
                        </div>
                        <p className="rowz">2019-{`${year}`}.All rights reserved<br /> Written by Siphosethu Nongwe<br />Made in Cape Town</p>
                    </div>
                </div>


            </Router >
        );
    }
}

export default Cars;