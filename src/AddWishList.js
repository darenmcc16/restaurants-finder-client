import React, { Component } from 'react'
import ApiContext from '../ApiContext'
import config from '../config'

export default class AddWishList extends Component {
  static defaultProps = {
    history: {
      push: () => { }
    },
  }
  static contextType = ApiContext;

  handleSubmit = e => {
    e.preventDefault()
    const wish = {
      name: e.target['restaurant-name'].value
    }
    fetch(`${config.API_ENDPOINT}/wish-list`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(wish),
    })
      .then(res => {
        if (!res.ok)
          return res.json().then(e => Promise.reject(e))
        return res.json()
      })
      .then(wish => {
        this.context.addWish(wish)
        this.props.history.push(`/wish/${wish.id}`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  render() {
    return (
      <section className='AddWishList'>
            <button type='submit'>
              Add to wish list
            </button>
      </section>
    )
  }
}