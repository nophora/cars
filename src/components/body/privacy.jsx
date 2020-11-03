import React, { Component } from 'react'
import Nav from '../nav/nav'

import './home.css'


class Privacy extends Component {
    state = {}





    render() {

        return (
            <div className="body">
                {<Nav />}

                <div style={{ marginTop: '-0%', height: `${window.innerHeight}px` }} className="honda">
                    <h1 className="fh">Privacy Policy</h1>
                    <p style={{ textAlign: 'center' }} className="fs">
                        Your privacy is important to us, and we know it's important to you. GT-VIEW is committed to safeguarding your privacy over the Internet. The Website Privacy Policy applies to your general use and browsing of the GT-VIEW Website; if you use our services please read Services Privacy Policy for information collection and use policies. This privacy policy statement is for you to understand how your personal information and other information at GT-VIEW will be treated as you use our Website.
    The essence of our privacy policy can be captured in three sentences:
    We will never share your personal information without your permission.
    Aggregate demographic or statistical information that is not personally identifiable may be collected and shared at the discretion of GT-VIEW.
    We do not collect personal information from children we know to be under the age of 13, and no part of our Website is directed to children under the age of 13.
    The following GT-VIEW Privacy Policy for the Website describes:

                    </p>
                </div>


            </div>

        );
    }
}

export default Privacy;