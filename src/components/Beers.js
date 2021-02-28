import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Beers extends Component {

    render() {

        const { beers } = this.props

        return (
            <div>
                {
                    beers.map((singleBeer) => {
                        return(
                            <div key={singleBeer._id} className="beer-list" >
                                <div>
                                    <img src={singleBeer.image_url} alt="Beer" />
                                </div>
                                <div>
                                    <Link to={`/beers/${singleBeer._id}`} > <h3>{singleBeer.name}</h3> </Link> 
                                    <h4>{singleBeer.tagline}</h4>
                                    <p>{singleBeer.contributed_by}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Beers