import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import PokeList from './components/PokeList';
import { Col } from 'react-bootstrap/lib/';
import Pagination from 'react-bootstrap/lib/Pagination';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0
    };

    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        let pages = Math.round(json.count / this.state.limit);
        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count
        });
        console.log(this.state);
      }).catch(err => {
        console.log(err)
      })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/`);
  }

  handlePaginationSelect() {
    console.log(render.page);
  }

  render() {

    let active = this.state.activePage;
    let items = [];
    for(let number = 1; number <= this.state.totalPages; number++){
      items.push(
        <Pagination.Item
          key={number}
          active={number === active}
          onClick={this.handlePaginationSelect}
        >
        {number}
        </Pagination.Item>
      );
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Col sm={8} md={10} smOffset={2} mdOffset={1} >
          <PokeList ListOfPokemon={this.state.pokemon} />
        </Col>

        <Col sm={12} >
          <Pagination bsSize="medium">
            {items}
          </Pagination>
        </Col>
      </div>
    );
  }
}

export default App;
