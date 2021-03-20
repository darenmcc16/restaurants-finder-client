import React from 'react'
import Note from '../Note/Note'
import ApiContext from '../ApiContext'
import {getRestaurantList} from './restaurant-helper'


export default class WishList extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }
  static contextType = ApiContext

  render() {
    const {wishListId} = this.props.match.params
    const { restaurants=[] } = this.context
    const restaurantForWishList = getRestaurantList(restaurants, wishListId)
    return (
      <section className='wishList'>
        <ul>
          {restaurantForWishList.map(restaurant =>
            <li key={restaurant.id}>
              <Note
                id={restaurant.id}
                name={restaurant.name}
              />
            </li>
          )}
        </ul>
      </section>
    )
  }
}

