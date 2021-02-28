import React, { Component } from 'react'

class SingleBeer extends Component {

    state = {
        myOneBeer: []
    }

    getMyBeer() {
        let myBeerId = this.props.match.params.beerId
        
        // const {oneBeer} = this.state
 
        let myClickedBeer = this.props.beers.filter((beer) => {
            return beer._id === myBeerId
        })
        

        this.setState({
            myOneBeer: myClickedBeer
        })
    }

    componentDidMount() {
        this.getMyBeer()
    }

    render() {

        return (
            <div>
                {
                    this.state.myOneBeer.map((beer) => {
                        return <div key={beer._id}>
                        <img src={beer.image_url} alt="Beer" />
                        <h2>{beer.name}</h2>
                        <h2>{beer.attenuation_level}</h2>
                        <h4>{beer.tagline}</h4>
                        <h4>{beer.first_brewed}</h4>
                        <p>{beer.description}</p>
                        <p>{beer.contributed_by}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default SingleBeer