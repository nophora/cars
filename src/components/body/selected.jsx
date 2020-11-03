import React, { Component } from 'react'
import Nav from '../nav/nav'
import L1 from './assets/m1.jpeg'
import L2 from './assets/m2.jpg'
import L3 from './assets/m3.jpeg'
import L4 from './assets/m4.jpeg'

import './home.css'


class Selected extends Component {
    state = {


        c: [],

        select: [
            {
                _id: 1, name: 'Porsche', icon: L1, p: `We are fans of the station Porsche SUV body shape and Porsche SUV family-friendly V60 station wagon is sorely missed in South Africa. Unfortunately, station Porsche SUV are not very popular in South Africa and in 2017 our very own Ciro De Siena aptly coined the term ‘Anti-stationwagonism’ which is a condition that afflicts local car buyers (watch this video to learn more about Anti-stationwagonism).
            It’s our loss though, because the Porsche SUV V60 is as stylish as they come. The V60 is offered as a plug-in hybrid (T6 and T8 Twin Engine) or can be had with a choice of petrol (T5 and T6) or diesel engines (D3 and D4). With a near-perfect blend of style, practicality and performance, we think the V60 is a damn cool SUV that we would love to see on South African roads.
            Buy a Porsche SUV`,
            }
            , {
                _id: 2, name: 'FERRARI', icon: L2, p: `Talking about the love for FERRARI 488 Pista, we have a particular soft spot for wagons that offer scintillating performance. How does this
            FERRARI Alpina B5 Touring grab you?
            This wagon will blast from zero to 100 kph in just 3.6 seconds and reach a top speed of 322 kph! Under the bonnet lurks a 4.4-litre twin-turbocharged V8 engine that’s been tuned to deliver 457 kW and 800 Nm of torque. With those performance figures thrown into  FERRARI 488 Pista form, it’s hard not to have the Alpina B5 Touring on our wishlist.
            Buy a FERRARI  Electric cars are typically well out of financial reach of most South African consumers and we hope that a more affordable and widely-accessible electric car option is offered in South Africa sooner rather than later. The latest third-generation Renault Zoe is an electric car that we think fits the bill, so to speak.
            It comes equipped with a 50 kWh battery that allows for a useable range of 382 km (WLTP) which represents a 30% increase over its predecessor. A new R135 electric motor generates 100 kW and 245 Nm of torque and comes mated with a single-speed gearbox. An 80 kW engine option is also offered. Fast direct current (DC) charging is now also offered alongside alternating current (AC) options.
            Buy a  FERRARI 488 Pista`,
            }
            , {
                _id: 3, name: 'DEAWOO', icon: L3, p: `We kick this list off with the current 2020 World Car of the Year, DEAWOO’s flagship SUV, the Telluride, which in itself is a pretty cool accolade to have under its belt. What a machine, just look at it! The Telluride isn’t produced for right-hand-drive markets like South Africa but we think it would be a great alternative to the German SUVs that are on sale locally.
            The Telluride offers a plush ride and is powered by a 3.8-litre V6 engine that churns out a meaty 217 kW and 355 Nm of torque and comes paired with an 8-speed automatic transmission. The Telluride is offered in either front or all-wheel-drive formats with variable power distribution to cope over various terrain. The interior can seat 8 and comes well-appointed with all the bells and whistles you would want in a large, luxury SUV.
            Buy a DEAWOO`,
            }
            , {
                _id: 4, name: 'BUGATTI DIVO', icon: L4, p: ` Cupra is the high-performance brand for Spanish car brand SEAT and the Formentor is a new crossover coupe that takes square aim at rivals such as the BUGATTI DIVO Sportback, Mercedes-Benz GLC Coupe and BMW X4 Coupe, for example, but at Seat pricing.
            As such, it boasts sharp and edgy styling that’s hard to not to like and we think it has the looks to best the best in this segment. As for firepower, a 2.0-litre turbocharged petrol engine is fitted with 228 kW and 400 Nm of torque on offer, combined with 4-wheel-drive and a 7-speed DSG transmission. A plug-in hybrid powertrain is also offered. If available in Mzanzi, we can’t see why the Formentor wouldn't serve as an attractive choice to counter the mostly predictable design direction offered by the German trio.
            BUGATTI DIVO Raptor as it’s perhaps the most capable offroad bakkie currently on sale in South Africa. But sometimes bigger is better and in the case of Ford’s F-Series range of pickups, this is certainly the case. The full-size F-Series is the most-sold pickup in the U.S. and in South Africa, enthusiasts seem to have an affinity for the F-150 and in particular, the F-150 Raptor.
            While various powerful powerplants are offered for the F-150, the F-150 Raptor is fitted with a twin-turbocharged 3.5-litre V6 engine with 331 kW and 690 Nm of torque and mated with a 10-speed automatic transmission that drives all 4 wheels. The larger F-150 Raptor is an offroad beast, especially because of its impressive variable damping Fox shock absorbers that deliver exceptional offroad performance. Variable drive modes are on offer, but as on the Ranger Raptor, Baja mode is the mode that allows you to achieve truly astonishing high-speed offroad performance in tough terrain. There is so much to like about the F-150 Raptor and it simply must feature on our list of coolest cars we would want in South Africa.
            `,
            }

        ],

    }



    componentDidMount() {
        console.log('j', this.props.match.params.id)
        const st = this.state.select.filter(e => { return e.name === this.props.match.params.id })
        this.setState({

            c: st,

        })

    }

    render() {

        return (
            this.state.c.map(e => {
                return (<div key={e._id} className="body">
                    {<Nav />}

                    <div className="honda">
                        <h1 className="fh">{e.name}</h1>
                        <img src={e.icon} alt='lb' className='lbh' />
                        <p className="fs">{e.p}


                        </p>
                    </div>


                </div>
                )
            })

        );
    }
}

export default Selected;