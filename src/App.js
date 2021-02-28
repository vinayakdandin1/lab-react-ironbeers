import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import './App.css'
import Beers from './components/Beers';
import Home from './components/Home';
import Nav from './components/Nav'
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'
import axios from 'axios'
class App extends Component {

  state = {
    beers: []
  }

  componentDidMount() {
    axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then((response) => {
            this.setState({beers: response.data})
        })
        .catch((err) => {
            console.log(err);
        })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = event.target

    let addNewBeer = {
      name: name.value,
      tagline: tagline.value,
      description: description.value,
      first_brewed: first_brewed.value,
      brewers_tips: brewers_tips.value,
      attenuation_level: attenuation_level.value,
      contributed_by: contributed_by.value
    }

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new', addNewBeer)
      .then((response) => {
        this.setState({
          beers: [addNewBeer, ...this.state.beers]
        }, () => {
          this.props.history.push('/')
        })
      })
      .catch((err) => {
        console.log(err);
      })

  }

  render() {
    const {beers} = this.state

    return (
      <div>
        <Route exact path='/' render={() => {
            return <Home />
        }} />
        <Nav />
        <Switch>
          <Route exact path='/beers' render={() => {
              return <Beers beers={beers} />
          }} />
          <Route path='/random-beer' render={() => {
              return <RandomBeer />
          }} />
          <Route path='/new-beer' render={() => {
              return <NewBeer onAdd={this.handleSubmit} />
          }} />
          <Route path='/beers/:beerId' render={(rotueProps) => {
              return <SingleBeer beers={beers} {...rotueProps} />
          }} />
          
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)