import React from 'react'
import AddFavorite from './AddFavorite'


class SearchResults extends React.Component {
    render() {
        //get the arrays of authors
        const restaurant = this.props.name
        //get the saleability status

        //if the book is free ...
            //... there is no price to show
            return (
                    <div>
                        <h3>{restaurant}</h3>
                        <h4>Rating: {this.props.rating}</h4>
                        <h4>{this.props.price} </h4>
                        <p>Review Count: {this.props.review_count}</p>
                        <a href={this.props.url}>Yelp Reviews</a>
                        <AddFavorite />
                    </div>
            )
        }  
    }



export default SearchResults