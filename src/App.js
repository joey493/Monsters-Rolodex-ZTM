// import { useState } from 'react';
import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.components'
import SearchBox from './components/search-box/search-box.components';

// Don't repeat your self

// ! I Don't why it didn't assigned the id
// function App() {
//   const usersName = async () => {
//     try {
//       await fetch('https://jsonplaceholder.typicode.com/users')
//         .then((res) => res.json())
//         .then((users) => setMonster(users));
//     } catch (error) {
//       console.log('error', error);
//     }
//   };

//   const [monsters, setMonster] = useState([usersName()]);

//   return (
//     <div className="container">
//       {monsters.map((monster) => (
//         <h3 key={monster.id}>{monster.name}</h3>
//       ))}
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder='search monsters'handleChange={(e) => this.setState({searchField: e.target.value})}/>
        <CardList monsters={filteredMonster}>
        </CardList>
      </div>
    );
  }
}

export default App;