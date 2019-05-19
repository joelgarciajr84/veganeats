import React from 'react';
import './App.scss';
import Search from './components/search/search.component';
import Footer from './components/footer.component';
import Header from './components/header.component';

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
    zomato: [],
    isLoaded: false
  }

  // TODO: Fetch restaurants from an API that has images
  componentDidMount() {
    const url = 'https://developers.zomato.com/api/v2.1/search?cuisines=vegan';
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('user-key', 'c4c1eb418c1e4c3ce614b01a8dac7d81');

    let options = {
      method: 'GET',
      headers: headers
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          zomato: json.restaurants,
        });
      })
  }

  render() {
    let { isLoaded, cities, restaurants } = this.state;

    if (!isLoaded) {
      return (
        <div className="App">
          <Header />
          <div className="section is-vcentered is-medium">
            <div className="container">
              <div className="columns is-centered">
                <div className="column is-half"><progress className="progress is-large" max="100">15%</progress></div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header />
          <Search cities={cities}  restaurants={restaurants} />
          <Footer />
        </div>
      );
    }
  }
}

export default App;
