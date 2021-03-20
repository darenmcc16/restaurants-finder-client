import React, { Component } from 'react'
import ApiContext from './ApiContext'
import {API_ENDPOINT} from './config'

export default class AddFavorite extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: {
        value: '',
        touched: false
      }
    }
  }

  static contextType = ApiContext;

  handleAddFolder = (e) => {
    e.preventDefault();

    const newFavorite = JSON.stringify({
      restaurant_name: this.state.name.value
    })
    console.log()

    fetch(`${API_ENDPOINT}`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: newFavorite
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(response => this.context.addFavoriteContext(response))
      .then(
        this.props.history.push('/'))
      .catch(error => {
        alert(error.message);
      });
  };

  addFav = restaurant_name => {
    this.setState({value: restaurant_name})
    console.log(restaurant_name)
  }

  render() {
    return (
      <section className='AddFavoriteList'>
            
            <button type='submit' htmlFor="favoriteName" id="favoriteName" onClick={e => this.addFav(e.target.value)}>
              Add to favorites
            </button>
      </section>
    )
  }
}