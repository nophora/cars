import React, { Component } from 'react'
import './nav.css'
import { ReactComponent as User } from './user.svg'
import { Link } from 'react-router-dom'
import Logo from './logo.png'


class Nav extends Component {
    state = {
        image: "",
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
    out = () => {
        const data = "";

        this.setState({
            image: "",
        })
        localStorage.setItem('accont', JSON.stringify(data))

    }
    componentWillReceiveProps(nextProps) {
        const data = JSON.parse(localStorage.getItem('accont'));

        if (data !== "" && data !== null) {

            const image = JSON.parse(localStorage.getItem('accont'))

            this.setState({
                image: image.image
            })

        }
    }

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('accont'));
        this.size()
        if (data !== "" && data !== null) {
            setTimeout(() => {
                const image = JSON.parse(localStorage.getItem('accont'))

                this.setState({
                    image: image.image
                })


            }, 30)
        }
    }


    render() {
        return (
            <div className="nav">
                <div className="sign">
                    <Link style={{ alignItems: 'center', justifyContent: 'center', display: 'flex', color: '#ffff', textDecoration: 'none' }} to='/'>

                        <img src={Logo} alt='vdl' className='sigm' />
                        {this.state.wide >= 800 && <h1 style={{ color: '#ffff', textDecoration: 'none' }} >GT-VIEW</h1>}

                    </Link>
                </div>
                <div style={{ opacity: this.state.wide >= 800 ? 1 : 0 }} className="sign2">
                    <p className="s1">VEHECLES</p>
                    <p className="s2">TOOLS</p>
                    <Link style={{ color: '#ffff', textDecoration: 'none' }} to='/privacy_policy'>
                        <p className="s3">OUR STORY</p>
                    </Link>
                </div>
                <div className="sup">
                    <div className="supr">
                        {this.state.image === "" ? <Link style={{ color: 'crimson', textDecoration: 'none' }} to='/signin'>
                            <p className="sp">sign up</p> </Link> :
                            <p onClick={this.out} className="sp">sign out</p>}
                        {this.state.image === "" ? <User style={{
                            marginTop: '5%',
                            borderRadius: '50%',
                            border: '2px  solid #fff', fill: '#ffff', width: '25px', height: '25px'
                        }} /> : <img src={this.state.image} alt='imgs' style={{
                            marginTop: '5%',
                            borderRadius: '50%',
                            border: '2px  solid #fff', fill: '#ffff', width: '25px', height: '25px'
                        }} />}
                    </div>
                </div>
            </div >
        );
    }
}

export default Nav;