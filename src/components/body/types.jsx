import React, { Component } from 'react'
import Nav from '../nav/nav'
import Logl from './assets/logl.jpeg'
import L1 from './assets/l1.jpeg'
import L2 from './assets/l2.jpeg'
import L3 from './assets/l3.jpeg'
import L4 from './assets/l4.jpeg'
import L5 from './assets/l5.jpeg'
import L6 from './assets/l6.jpeg'

import Adi from './assets/aud.jpeg'
import Adii from './assets/audi.png'
import R1 from './assets/r1.jpg'
import R2 from './assets/r2.jpg'
import R3 from './assets/r3.jpg'
import R4 from './assets/r4.jpg'
import R5 from './assets/r5.jpg'
import R6 from './assets/r6.jpg'

import Dv from './assets/dv.mp4'
import Da from './assets/da.mp4'

class Types extends Component {
    state = {

        ps: 0,
        vd: false,
        c: false,

        select: [],
        types: [{
            _id: "1", logo: Logl, name: 'Essenza SCV12',
            p: `The Lamborghini Squadra Corse team has unveiled the Lamborghini Essenza SCV12, an 830 horsepower track-only hypercar.
        The Lamborghini Essenza SCV12 is a more insane version of the Aventador and Lamborghini says that the Essenza SCV12 is a “direct descendant of cars such as the Miura Jota and Diablo GTR.”
        Although it does share some of its DNA with the Aventador, not a single part of the body is shared with the Aventador. At the front there’s an extended splitter and a vented hood. You also can’t miss that large rear wing that helps the Essenza SCV12 generated 2,645 pounds of downforce at 155 mph. The inside is also unique here as well.
        
        Lamborghini SCV12 packs over 830 horsepower
        Lamborghini Huracan EVO RWD Spyder is ready for summer
        Lego Technic's Lamborghini Sian FKP 37 is an attainable supercar
        It’s powered by a retuned version of the Aventador’s 6.5-liter V-12, which generates 830 hp. That means the Lamborghini Essenza SCV12 is powered by Lamborghini’s most powerful naturally aspirated engine. All that power is sent to the rear wheels via a 6-speed sequential transmission.
        The sad news is that Lamborghini only plans to build 40 of these beauties and they are probably all spoken for.`, cars: [L1, L2, L3, L4, L5, L6], icon: L3, video: Dv,
        },
        {
            _id: "2", logo: Adii, name: 'Audi R8',
            p: `The eighth-generation Audi R8 is the most keenly anticipated hatch in SA this year.
            These are the cars that VW plans to launch in South Africa in 2020
            By Willem van de Putte Feb 28, 2020
            Cape Town - When you’re in the vehicle manufacturing industry and almost one in four cars sold in South Africa belongs to you, you know you’re doing something right.
            That’s the success story of Audi R8 Group South Africa (VWSA) that managed to secure a 23.4% passenger market share in 2019 (including Audi) with the passenger brand ending the year with a 20.4% market share, moving 89 353 units.
            Taking in to consideration that a total of 536 626 new cars were sold last year (a decline of 15 601 over 2018) that’s pretty good going.
            Apart from a good year on the sales charts and the addition of some serious hi-tech applications VW’s core business still remains selling cars and in that respects 2020 is another biggie for them.
            Although the Audi R8 won’t be coming to our shores six of them are currently being tested by motoring journalists, lifestyle media, dealers and VW employees in an effort to gain insight into the experience of living with an electric vehicle in South Africa.
            It’s the first step of three paving the way for VW to include electric vehicles in its future production portfolio locally. The second phase will include a fleet of ID.3 vehicles from next year. The last phase will see electric VW vehicles available for sale to the public by 2022.
            Audi R8 TCR.
            Next month they reveal the new GTC car and in the second quarter the launch of the T-Cross 1.5 110kW and 1.0 Trendline 70kW models, with the latter likely to come in under the R300 000 mark. Around the same time, the current-generation Golf will get its last hurrah with the special edition, 213kW Audi R8 TCR of which only 300 units will be sold here.
            The third quarter sees the much anticipated launch of the T-Roc but VW executives won’t give away too much in terms of spec and pricing at this stage. The T-Roc is a similar size to the Audi A2, and it will be positioned above the T-Cross in VW's growing SUV line-up.
            Audi R8 T-Roc.
            The T-Roc will be followed by a Proudly South African Polo Vivo edition and the one that everyone’s been waiting for, the New Audi R8. The eighth-generation Golf comes with a fully digitised cabin and a glut of new technologies, and the range will be headlined by the , which now produces 180kW.
            new Audi R8
            Audi R8.
            Not to be outdone, the commercial side of the business will launch the upgraded Amarok with 190kW (200kW on over-boost) and 580Nm of torque that will propel it to 100km/g in under eight seconds.
            Amarok with 190kW.
            It seems like it was only yesterday that VW brought us the first 2.0-litre turbo-charged diesel double cab but this year sees its 10th anniversary.
            Digital services for South African motorists
            Apart from a successful sales year VW have made a switch from being manufacturer-centric to becoming more customer-centric and in the process begun their We Services application that offers a range of vehicle-related digital services and mobility offerings that can be used in-car or via smartphones.
            There are seven parts to the services: We Share, that offers 100% fully-electric car sharing; We Park allows the user to find parking, start the parking process and pay without a fee with a click; We Experience gives owners personalised recommendations and benefits; Car-Net connects the user with the car from anywhere; We Charge allows the owner to quickly find nearby e-charging stations; We Deliver enables the user to deliver services to the car and We Connect Go that provides owners with all the vehicle information on a smartphone.
            Let’s say the user needs to fill up with fuel and using the We Experience app it allows them to find the closest petrol station and then browse to see which has cheaper diesel or are offering a free drink if you fill up.
            We Connect Go is a plug and play solution from your car to your smartphone that relays vehicle data from the car to your phone via Bluetooth and allows you to get help with 24-hour roadside assistance, creates a digital logbook that can be exported as a PDF, shows your vehicle statistics, allows you to make a service appointment with a dealership and awards points for safe and efficient driving.
            Data plugs will be standard on all models such as the Polo Hatch CL and above from the second half of the year and will be available through Accessories and after sales at the same time.
            That’s a lot of tech and there we were just getting used to fancy quick-change automatics`, cars: [R1, R2, R3, R4, R5, R6], icon: Adi, video: Da,
        }
        ]
    }


    left = () => {
        this.setState({
            ps: this.state.ps >= 133 ? 0 : this.state.ps + 19
        })
        console.log('ps', this.state.ps)

    }
    right = () => {
        this.setState({
            ps: this.state.ps <= -38 ? 0 : this.state.ps - 19
        })
        console.log('ps2', this.state.ps)
    }


    cs = (i) => {
        this.setState({
            c: !this.state.c,
            vd: false
        })
    }


    duration = () => {
        const player = document.querySelector('.vdx');

        console.log('vt', player.currentTime)
        console.log('vt', player.duration)

        if (player.currentTime === player.duration) {
            this.setState({
                vd: true
            })
        }


    }

    componentDidMount() {

        console.log('mtc', this.props.match.params.id)
        const st = this.state.types.filter(e => { return e._id === this.props.match.params.id })
        this.setState({

            select: st,

        })
        console.log('st', st)
    }

    render() {
        return (

            this.state.select.map(e => {
                return (<div key={e._id} className="body">
                    {<Nav />}

                    <div className="types">
                        <h1 className="typr">THE NEW ERA OF TYPE S</h1>
                        <div className="hashlog">
                            <img onClick={this.cs} src={e.logo} alt='lb' className='lbr' />
                            <h1>{e.name}</h1>
                        </div>
                    </div>

                    <div className="typers">
                        <div className="colomr1">
                            <div className="videi">
                                {this.state.vd === true ? <img src={e.icon} alt='lbt' className="videoz" />
                                    : <video onTimeUpdate={this.duration} src={e.video} autoPlay className='vdx' />}
                            </div>
                            <div className="imgslid">
                                <div onClick={this.left} className="i1">{'<'}</div>
                                <div className="i2">

                                    <div className="abs2">
                                        {e.cars.map(e => { return (<img style={{ right: `${this.state.ps}%` }} key={e} src={e} className="pic" alt='mp' />) })}
                                    </div>
                                </div>
                                <div onClick={this.right} className="i1">{'>'}</div>
                            </div>
                        </div>
                        <div className="colomr2">
                            <h1>the race is on</h1>
                            <p className="ft">{e.p.slice(0, 420)}</p>
                            <p className="ft">{e.p.slice(420, 620)}</p>
                        </div>

                    </div>
                    <div style={{height:'100px',width:'100px',backgroundColor:'#ffff'}}></div>
                </div>)
            })



        );
    }
}

export default Types;