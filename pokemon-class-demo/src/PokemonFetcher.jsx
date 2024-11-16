import React, { Component } from 'react';
import PokemonCard from './PokemonCard';

// const pokemonList = ['pikachu', 'ditto', 'mew', 'charmander']

export default class PokemonFetcher extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pokemonList: []
        }
    }

    async componentDidMount() {
        for (let index = 0; index < 6; index++) {
            // Generate a random Pokemon ID Number
            let randomNumber = Math.ceil(Math.random() * 1025);
            // Pass random Pokemon Number to fetch
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`)
            let data = await response.json();
            // set fetch response data to the state
            // Method 1
            // this.setState({ pokemonList: [...this.state.pokemonList, data.name] });

            // Method 2
            this.setState((previousState) => {
                return {
                    pokemonList: [...previousState.pokemonList, data.name]
                }
            })
        }
        console.log("PokemonFetcher first load on the page");
    }

    render() {
        return (
            <div>
                <h1>Pokemon Data</h1>
                {
                    this.state.pokemonList.map(pokemon => {
                        return <PokemonCard name={pokemon} />
                    })
                }
                <button onClick={() => {
                    this.setState({ pokemonList: [] });
                }}>Empty the state</button>
            </div>
        )
    }
}
