import React, { Component } from 'react'
import './fromdemo.css'
import Create from './create'
import Nav from '../nav/nav'


class Sign extends Component {
    state = {
        l: false,
        wide: window.innerWidth,


    }
    size = () => {
        const change = () => {
            this.setState({
                wide: window.innerWidth
            })
        }
        window.addEventListener('resize', change, false)
    }
    componentDidMount() {
        this.size()
        setTimeout(() => {
            this.setState({ l: !this.state.l })

        }, 7000)
        setTimeout(() => {
            setInterval(() => {
                this.setState({ l: !this.state.l })
            }, 4000)
        }, 10000)
    }
    render() {
        /*<div className="formwrx">
                  justify-content: flex-end;
                   <div className="formwr">
         </div>
        */
        return (
            <React.Fragment>
                <div className='darf'>
                    <Nav />
                    <div className='calendarf'>

                        <Create />

                        >

                    </div>



                </div>
            </React.Fragment>
        );
    }
}

export default Sign;