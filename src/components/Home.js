import React, { Component } from 'react'
import beerImage from '../assets/beers.png'
import newBeer from '../assets/new-beer.png'
import randomBeer from '../assets/random-beer.png'
import {Link} from  'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div className="main">
                <div>
                    <img src={beerImage} alt="Beers" />
                    <Link to="/beers" ><h2>All Beers</h2></Link>    
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus nulla et gravida tincidunt.
                     In hac habitasse platea dictumst.  </p>
                </div>
                <div>
                    <img src={randomBeer} alt="Beers" />
                    <Link to="/random-beer" > <h2>Random Beer</h2> </Link>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus nulla et gravida tincidunt.
                     In hac habitasse platea dictumst.  </p>
                </div>
                <div>
                    <img src={newBeer} alt="Beers" />
                    <Link to="/new-beer" > <h2>New Beer</h2> </Link>
                    <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus nulla et gravida tincidunt.
                     In hac habitasse platea dictumst. </p>
                </div>
            </div>
        )
    }
}

export default Home