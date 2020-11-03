import React, { Component } from 'react'
import './wecole.css'

class Welcome extends Component {
    state = {
        light: false,
        l: false,
        r: false,
        b: false,
        t1: false,
        t2: false,
        t3: false,
        t4: false,
        op: false


    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ light: true })
        }, 10000)
        setTimeout(() => {
            this.setState({ l: true })
        }, 17000)
        setTimeout(() => {
            this.setState({
                l: false,
                r: true
            })
        }, 19200)
        setTimeout(() => {
            this.setState({ l: true })
        }, 23800)
        setTimeout(() => {
            this.setState({ b: true })
        }, 29800)

        //touch
        setTimeout(() => {
            this.setState({
                t1: true,
                t2: false,
                t3: false,
                t4: false,
            })
        }, 34000)
        setTimeout(() => {
            this.setState({
                t1: false,
                t2: true,
                t3: false,
                t4: false,
            })
        }, 37000)
        setTimeout(() => {
            this.setState({
                t1: false,
                t2: false,
                t3: true,
                t4: false,
                op: true
            })
        }, 39000)
        setTimeout(() => {
            this.setState({
                t1: false,
                t2: false,
                t3: false,
                t4: true,
            })
        }, 41000)
    }
    render() {
        return (
            <div style={{ height: `${window.innerHeight}px` }} className="wecom">
                {this.state.b === false ? <div style={{ height: `${window.innerHeight}px` }} className="wecom">
                    <img className="caw" src={'./uploads/carwel.jpeg'} alt='wel' />
                    <div style={{ backgroundColor: this.state.light === false ? 'black' : 'rgba(0, 0, 0, 0)' }} className="weco">

                        <div style={{
                            backgroundColor: this.state.l === true ? 'white' : 'rgba(0, 0, 0, 0)',
                            boxShadow: this.state.l === true ? `0px 65px 200px ${this.state.r === false ? 80 : 500}px rgba(255, 255, 255, 0.514),0px 1px 100px ${this.state.r === false ? 40 : 400}px rgb(255, 255, 255)` : ''

                        }} className="weco1"></div>
                        <div style={{
                            backgroundColor: this.state.l === true ? 'white' : 'rgba(0, 0, 0, 0)',

                            boxShadow: this.state.l === true ? `0px 65px 200px ${this.state.r === false ? 80 : 500}px rgba(255, 255, 255, 0.514),0px 1px 100px ${this.state.r === false ? 40 : 400}px rgb(255, 255, 255)` : ''

                        }} className="weco2"></div>

                    </div>
                </div>
                    :
                    <div style={{ height: `${window.innerHeight}px` }} className="wecomc2">
                        <div className="logg">
                            <img style={{
                                opacity: this.state.op === true ? 1 : 0,
                            }} src={'./uploads/logl.jpeg'} alt='logl' className='logl' />
                        </div>
                        <div className="loggr">
                            <div style={{
                                backgroundColor: 'white',
                                marginLeft: `${this.state.t1 === true ? 90 : this.state.t2 === true ? 70 : this.state.t3 === true ? 10 : this.state.t4 === true ? 50 : 0}%`,
                                marginTop: `${this.state.t1 === true ? 55 : this.state.t2 === true ? 5 : this.state.t3 === true ? 55 : this.state.t4 === true ? 30 : 0}%`,
                                boxShadow: `0px 0px 200px 140px rgba(255, 255, 255, 0.514),0px 0px 120px 60px rgb(255, 255, 255)`

                            }} className="weco3"></div>
                        </div>
                    </div>

                }
            </div>);
    }
}

export default Welcome;