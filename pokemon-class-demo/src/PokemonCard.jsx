import React, {Component} from 'react'

export default class PokemonCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name
        }
    }

    componentWillUnmount() {
        console.log("Card for pokemon is being unloaded: ", this.state.name)
    }

    render() {
        return (
            <h1>{this.state.name}</h1>
        )
    }
}