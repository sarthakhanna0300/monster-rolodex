import React, { Component } from 'react';
// import logo from './logo.svg';
import { CardList } from './Components/card-list/cardlist';
import { SearchBox } from './Components/search-component/searchcomponent';
import './App.css';


class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      SearchField: '',
    };
  }

    componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({monsters:users}));
    }

  render(){
    const {monsters,SearchField}= this.state;
    const FilterMonster = monsters.filter(monsters => monsters.name.toLowerCase().includes(SearchField.toLowerCase())
    )
    return (  <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox placeholder='search monsters'
      Handlechange= {e=>this.setState({SearchField:e.target.value})}>
      </SearchBox>
      <CardList monsters={FilterMonster} />
      </div>
); 
  }
}
export default App;
