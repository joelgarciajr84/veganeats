import React from 'react';
import "./css/index.css"
import Search from './components/SearchBox';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends React.Component {
  state = {
    cities: [
      'Lisboa, Portugal',
      'Porto, Portugal'
    ],
    restaurants: [
      {
        name: 'Ao 26 vegan food project',
        city: 'Lisboa'
      },
      {
        name: 'O Botanista',
        city: 'Lisboa'
      },
      {
        name: 'PSI',
        city: 'Lisboa'
      },
      {
        name: 'Os Tibetanos',
        city: 'Lisboa'
      },
      {
        name: 'Sublime Food Drinks',
        city: 'Lisboa'
      },
      {
        name: 'Tasquinha do Caco - São Lázaro',
        city: 'Porto'
      },
      {
        name: 'Pecado Saudável',
        city: 'Porto'
      }
    ],
  }


  render() {
    let { cities, restaurants } = this.state;

      return (
        <div className="App">
          <Header />
          <Search cities={cities}  restaurants={restaurants} />
          <Footer />
        </div>
      );
  }
}

export default App;
