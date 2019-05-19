import React from 'react';
import SearchResults from './searchResults.component';

class SearchComponent extends React.Component {
  searchLocation = React.createRef();
  
  state = {
    searchTerm: ''
  }

  formSubmit = (event) => {
    event.preventDefault();
  }

  termChanged = () => {
    this.setState({
      searchTerm : this.searchLocation.current.value
    })
  }

  render() {
    let { searchTerm } = this.state;

    return (
      <div className="section">
        <div className="container">
          <form className="search-form has-text-centered" onSubmit={this.formSubmit}>
            <h1 className="title">Hello, I'm a search component!</h1>
            <h2 className="subtitle">I will return vegan restaurants based on your city</h2>
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Enter your city" onChange={this.termChanged} ref={this.searchLocation} />
              </div>
            </div>
          </form>
          <SearchResults cities={this.props.cities} restaurants={this.props.restaurants} searchTerm={searchTerm} />
        </div>
      </div>
    );
  }
}

export default SearchComponent;