import React from 'react'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import config from './config'



export default class RestaurantCard extends React.Component {
    //set up the static default props
    static defaultProps={
        onDeleteRestaurant: () => {},
    }
    static ContextType=ApiContext;
//create a handled when clicked function
    handleClickDelete = e => {
        e.preventDefault()
        const restaurantId = this.props.id
//have to create an API call to remove the restaurant card from the server
        fetch(`${config.API_ENDPOINT}/${restaurantId}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if(!res.ok)
            return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .then(() =>{
            this.context.deleteRestaurant(restaurantId)
            this.props.onDeleteRestaurant(restaurantId)
        })
        .catch(error => {
            console.error({error})
        })
    }
    render(){
      const {name, id, modified} = this.props
  return (
    <div className='RestaurantCard'>
      <h2 className='Restaurant__title'>
        <Link to={`/restaurant/${id}`}>
          {name}
        </Link>
      </h2>
      <button className='Restaurant__delete' type='button'
      onClick={this.handleClickDelete}
      >
        <FontAwesomeIcon icon='trash-alt' />
        {' '}
        remove
      </button>
    </div>
  )
}
}

