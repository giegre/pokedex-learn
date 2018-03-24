import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokemonIndexList from './components/PokemonIndexList';
import PokemonModal from './components/PokemonModal';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      allPokemon: [],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0,
      loaded: false,
      showModal: false,
      selectedPokemon: null
    };

    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.handleModalOpen = this.handleModalOpen.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        let pages = Math.ceil(json.count / this.state.limit);
        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count,
          loaded: true
        });
        console.log(this.state);
      }).catch(err => {
        console.log(err)
      })
  }




  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  componentHasMounted() {

  }

  handlePaginationSelect(event) {
    let pageNumber = event.target.getAttribute("data-number");
    let offset = this.state.limit * (pageNumber - 1);
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${offset}`);
    this.setState({
      activePage : +pageNumber
    });
    console.log(this.state.activePage);
  }

  handleLimitChange(event) {
    console.log(event.target.getAttribute("data-number"));
    this.setState({
      limit: +event.target.getAttribute("data-number") || this.state.count,
      activePage: 1
    }, () => {
      this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=0`);
    })
  }

  handleModalOpen(pokemon) {
    if(pokemon.url !== undefined) {
      fetch(`${pokemon.url}`)
        .then(response => {
          return response.json();
        }).then(json =>{
          console.log(json);
          this.setState({
            selectedPokemon: json,
            showModal: true
          })
        }).catch(ex => {
          console.log('parsing failed', ex)
        })
    }
  }

  handleModalClose() {
    this.setState({
      showModal: false
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Pokedex</h1>
        </header>

        {this.state.loaded ? null : 'Now Loading ...'}

        <PokemonIndexList
          display={this.state.loaded}
          options={[10, 50, 100, 200]}
          selectedValue={this.state.limit}
          allValue={this.state.count}
          onOptionSelected={this.handleLimitChange}
          ListOfPokemon={this.state.pokemon}
          btnSize="medium"
          totalPages={this.state.totalPages}
          activePage={this.state.activePage}
          onSelect={this.handlePaginationSelect}
          openModal={this.handleModalOpen} />

        <PokemonModal
          pokemon={this.state.selectedPokemon}
          closeModal={this.handleModalClose}
          showModal={this.state.showModal} />
      </div>
    );
  }
}

export default App;
