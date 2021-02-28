import axios from 'axios'
import React, { Component } from 'react'


class RandomBeer extends Component {

    state = {
        myRandomBeer: {}
    }

    componentDidMount() {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
            .then((response) => {
                
                this.setState({
                    myRandomBeer: response.data
                })
            }) 
            .catch((err) => {
                console.log(err);
            })
    }

    render() {

        const {myRandomBeer} = this.state
        return (
            <div key={myRandomBeer._id}>
                <img src={myRandomBeer.image_url} alt="myRandomBeer" />
                <h2>{myRandomBeer.name}</h2>
                <h2>{myRandomBeer.attenuation_level}</h2>
                <h4>{myRandomBeer.tagline}</h4>
                <h4>{myRandomBeer.first_brewed}</h4>
                <p>{myRandomBeer.description}</p>
                <p>{myRandomBeer.contributed_by}</p>    
            </div>
        )
    }
}

export default RandomBeer