import React from 'react'
import ApiContext from './ApiContext'
import { getRestaurantList } from './restaurant-helper'



export default function FavoriteList(props){
    const {restaurants =[]} = props.context
    const restaurantsForFavorite = getRestaurantList(restaurants)
    return(
        <div className='restaurantFavList'>
            <ul>
            {restaurantsForFavorite.map(restaurant =>
            <li key={restaurant.id}>
                {restaurant.name}
            </li>
            )}
            </ul>
        </div>
    )
}