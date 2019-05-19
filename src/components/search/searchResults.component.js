/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class SearchResultsComponent extends React.Component {
  state = {
    filteredRestaurants: []
  }

  getFilteredRestaurants = (updatedProps) => {
    const filtered = this.props.restaurants.filter((restaurant) => (
      restaurant.city.toLowerCase().includes(updatedProps.searchTerm))
    );
    return filtered;
  }

  componentWillReceiveProps(updatedProps) {
    this.setState({
      filteredRestaurants: this.getFilteredRestaurants(updatedProps)
    })
  }


  render() {
    if (this.props.searchTerm === '') {
      return null;
    }

    if (this.state.filteredRestaurants.length > 0) {
      return (
        <div className="box">
          {this.state.filteredRestaurants.map((restaurant, key) => (
            <article className="media" key={key}>
              <figure className="media-left">
                <p className="image is-64x64">
                  <img alt="" src="https://bulma.io/images/placeholders/128x128.png" />
                </p>
              </figure>
              <div className="media-content">
                <div className="content">
                  <p>
                    <strong>{restaurant.name}</strong> <small>@johnsmith</small> <small>31m</small>
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )
    } else {
      return (
        <div className="box">
          No restaurants found in that city
        </div>
      );
    }
  }
}

export default SearchResultsComponent;