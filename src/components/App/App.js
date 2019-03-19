import React, { Component } from 'react';
import fetch from 'isomorphic-unfetch';

import Card from '../common/Card';
import Button from '../common/Button';
import SearchBar from '../common/Searchbar';

import '../../assets/scss';
import './App.scss'



const baseURL = 'https://pokeapi.co/api/v2/pokemon/?';
const offSet = Math.floor(Math.random() * (800 - 1)) + 1;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      pokeSearch: '',
      pokemon: this.props.pokemon
    };
  }

  componentDidMount() {
    fetch(`${baseURL}limit=50&offset=${offSet}`)
      .then(res => res.json())
      .then(data => this.setState({
        pokemon: data.results
      }));
  }

  handleStartClick = () => {
    this.setState({
      start: true
    })
    console.log(this.state.pokemon);
  }

  handleChange = (e) => {
    this.setState({
      pokeSearch: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${baseURL + this.state.pokeSearch.toLocaleLowerCase()}`)
      .then(r => r.json())
      .then(data => {
        console.log(data);
      });
  }

  handleCardClick = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="app">
        <header>
          <title>Poke-Search</title>
          <img className="poke-logo"
            alt="Pokemon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2000px-International_Pok%C3%A9mon_logo.svg.png" />
        </header>
          {this.state.start 
            ?
          <div className='searchCntr'>
            <SearchBar pokeSearch={this.state.pokeSearch} />
            <div className="cardCntr">
              {this.state.pokemon.map(({ name }, index) => {
                const id = (offSet + index) + 1;
                return (<Card
                  key={name}
                  name={name}
                  spriteURL={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  onClick={this.handleCardClick} />)
              })
              }
            </div>
          </div>
            :
            <div className="start">
              <Button title="start" onClick={this.handleStartClick} />
            </div>
          }
      </div>
    );
  }
}

export default App;
