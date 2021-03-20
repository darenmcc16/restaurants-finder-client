import React from 'react'
import Footer from './Footer';
import Header from './Header';
import BusinessSearch from './yelp-api/BusinessSearch';



function Landing(){
        return(
        <div className='landing-main'>
            <div className='landing'>
                <section id='landingPage'>
                <Header />
                    <div className='description'>
                        <h5>Welcome to Restaurant Finder! This app is designed to help you organize all the restaurants you wish to visit. 
                        Create a wish list or save you favorites, with Restaurant Finder you'll have every restaurant in your area at your finger tips.
                        </h5>
                    </div>
                    <BusinessSearch />
                    <Footer />
                </section>
            </div>
        </div>
        )
    }

export default Landing;