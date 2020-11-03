import React, { Component } from 'react'
import Welcome from './wecome'
import Nav from '../nav/nav'
import { Link } from 'react-router-dom'
import './home.css'
import B1 from './assets/lgb1.jpg'
import B2 from './assets/lgb2.jpg'
import B3 from './assets/lgb3.jpg'
import B4 from './assets/lgb4.jpg'
import Honda from './assets/honda.jpg'


class Home extends Component {
    state = {
        nav: false,
        body: false,
        wide: window.innerWidth,
        

        types: [{
            _id: 1, logo: './uploads/logl.jpeg', name: 'Essenza SCV12',
            p: `The Lamborghini Squadra Corse team has unveiled the Lamborghini Essenza SCV12, an 830 horsepower track-only hypercar.
        The Lamborghini Essenza SCV12 is a more insane version of the Aventador and Lamborghini says that the Essenza SCV12 is a “direct descendant of cars such as the Miura Jota and Diablo GTR.”
        Although it does share some of its DNA with the Aventador, not a single part of the body is shared with the Aventador. At the front there’s an extended splitter and a vented hood. You also can’t miss that large rear wing that helps the Essenza SCV12 generated 2,645 pounds of downforce at 155 mph. The inside is also unique here as well.
        
        Lamborghini SCV12 packs over 830 horsepower
        Lamborghini Huracan EVO RWD Spyder is ready for summer
        Lego Technic's Lamborghini Sian FKP 37 is an attainable supercar
        It’s powered by a retuned version of the Aventador’s 6.5-liter V-12, which generates 830 hp. That means the Lamborghini Essenza SCV12 is powered by Lamborghini’s most powerful naturally aspirated engine. All that power is sent to the rear wheels via a 6-speed sequential transmission.
        The sad news is that Lamborghini only plans to build 40 of these beauties and they are probably all spoken for.`, cars: ['uploads/l1.jpeg', 'uploads/l2.jpeg', 'uploads/l3.jpeg', 'uploads/l4.jpeg', 'uploads/l5.jpeg', 'uploads/l6.jpeg',], icon: 'uploads/l3.jpeg', video: './uploads/dv.mp4',
        },
        {
            _id: 2, logo: './uploads/audi.PNG', name: 'Audi R8',
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
            That’s a lot of tech and there we were just getting used to fancy quick-change automatics`, cars: ['uploads/r1.jpg', 'uploads/r2.jpg', 'uploads/r3.jpg', 'uploads/r4.jpg', 'uploads/r5.jpg', 'uploads/r6.jpg',], icon: 'uploads/aud.jpeg', video: './uploads/da.mp4',
        }
        ]



    }

    c = (i) => {
        const st = this.state.types.filter(e => { return e._id === i })
        this.setState({
            c: !this.state.c,
            select: st,

        })
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
            this.setState({
                nav: true
            })
        }, 29800)
        setTimeout(() => {
            this.setState({
                body: true
            })
        }, 43000)
    }


    render() {
        return (
            <div className="cars">
                {this.state.wide >= 800 ? <Welcome /> : <div style={{ width:'100%',backgroundColor:'#ffff',height: '150px' }}></div>}
                {this.state.nav && <Nav />}

                {this.state.body && <div className="body">
                    <div className="type">
                        <h1 className="typ">THE NEW ERA OF TYPE S</h1>
                    </div>

                    <div className="typer">
                        {this.state.types.map(e => {
                            return (<div key={e._id} className="typer1">

                                <div className="colom2">
                                    <img src={e.logo} alt='lb' className='lb' />
                                </div>
                                <div className="colom3">
                                    <h1>{e.name}</h1>
                                    <p className="ft">{e.p.slice(0, 120)}</p>
                                    <img src={e.icon} alt='lbt' className="video" />
                                    <p className="ft">{e.p.slice(120, 250)}</p>
                                    <Link style={{ alignSelf: 'flex-end' }} to={`/type_s/${e._id}`}>
                                        <div onClick={() => { this.c(e._id) }} className="butn">MORE</div>
                                    </Link>
                                </div>
                            </div>)
                        })}





                    </div>


                    <div className="csaction">
                        <div className="njal">MOST EXPENSIVE CAR </div>
                        <div className="ymi">

                        <Link style={{ }} to={`/select/${'Porsche'}`}>
                            <div className="kal">
                                <div className="csqt">
                                    <div className="c2"><img src={B4} alt='lb' className='lbe' /></div>
                                  
                                </div>
                            </div>
                          </Link>

                        <Link style={{ }} to={`/select/${'FERRARI'}`}>
                            <div className="kal2">
                                <div className="csqt">
                                   <div className="c2"><img src={B2} alt='lb' className='lbe' /></div>
                                  
                                </div>
                            </div>
                            </Link>

                        <Link style={{ }} to={`/select/${'DEAWOO'}`}>
                            
                            <div className="kal3">
                                <div className="csqt">
                                   <div className="c2"><img src={B3} alt='lb' className='lbe' /></div>
                                 
                                </div>

                                    </div>
                                    </Link>
                                    <Link style={{ }} to={`/select/${'BUGATTI DIVO'}`}>

                            <div className="kal4">
                                <div className="csqt">
                                   <div className="c2"><img src={B1} alt='lb' className='lbe' /></div>
                                   
                                </div>
                                </div>
                                </Link>
                        </div>
                        
                    </div>

                                
                    <div className="honda">
                        <h1 className="fh">Cupra Formentor</h1>
                        <img src={Honda} alt='lb' className='lbh' />
                        <p className="fs">
                        Cupra is the high-performance brand for Spanish car brand SEAT and the Formentor is a new crossover coupe that takes square aim at rivals such as the Audi Q3 Sportback, Mercedes-Benz GLC Coupe and BMW X4 Coupe, for example, but at Seat pricing.
As such, it boasts sharp and edgy styling that’s hard to not to like and we think it has the looks to best the best in this segment. As for firepower, a 2.0-litre turbocharged petrol engine is fitted with 228 kW and 400 Nm of torque on offer, combined with 4-wheel-drive and a 7-speed DSG transmission. A plug-in hybrid powertrain is also offered. If available in Mzanzi, we can’t see why the Formentor wouldn't serve as an attractive choice to counter the mostly predictable design direction offered by the German trio.
Skoda Yeti Raptor as it’s perhaps the most capable offroad bakkie currently on sale in South Africa. But sometimes bigger is better and in the case of Ford’s F-Series range of pickups, this is certainly the case. The full-size F-Series is the most-sold pickup in the U.S. and in South Africa, enthusiasts seem to have an affinity for the F-150 and in particular, the F-150 Raptor.
While various powerful powerplants are offered for the F-150, the F-150 Raptor is fitted with a twin-turbocharged 3.5-litre V6 engine with 331 kW and 690 Nm of torque and mated with a 10-speed automatic transmission that drives all 4 wheels. The larger F-150 Raptor is an offroad beast, especially because of its impressive variable damping Fox shock absorbers that deliver exceptional offroad performance. Variable drive modes are on offer, but as on the Ranger Raptor, Baja mode is the mode that allows you to achieve truly astonishing high-speed offroad performance in tough terrain. There is so much to like about the F-150 Raptor and it simply must feature on our list of coolest cars we would want in South Africa.

                            
                        </p>
                    </div>

                </div >

                }
            </div>
        );
    }
}

export default Home;