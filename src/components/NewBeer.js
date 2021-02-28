import React, { Component } from 'react'

class NewBeer extends Component {
    render() {
        return (
            <form onSubmit={this.props.onAdd}>
                <input name="name" type="text" placeholder="Enter name"/>
                <input name="tagline" type="text" placeholder="Enter tagline"/>
                <input name="description" type="text" placeholder="Enter Description"/>
                <input name="first_brewed" type="text" placeholder="Enter First Brewed Date"/>
                <input name="brewers_tips" type="text" placeholder="Enter brewing tips"/>
                <input name="attenuation_level" type="number" placeholder="Enter Attenuation Level"/>
                <input name="contributed_by" type="text" placeholder="Contributed by"/>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default NewBeer