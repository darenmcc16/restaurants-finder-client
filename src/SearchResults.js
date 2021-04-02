import React from 'react'



class SearchResults extends React.Component {
    render() {
        //get the arrays of authors
        const restaurant = this.props.name
        //get the saleability status

        //if the book is free ...
            //... there is no price to show
            return (
                    <div>
                        <form onSubmit={this.props.handleAddRestaurant}>
                        <h3>{restaurant}</h3>
                        <h4>Rating: {this.props.rating}</h4>
                        <h4>{this.props.price} </h4>
                        <p>Review Count: {this.props.review_count}</p>
                        <a href={this.props.url}>Yelp Reviews</a>
                        <input type='text' name='user_id' defaultValue={this.props.user_id} />
                        <input type='text' name='yelp_id' defaultValue={this.props.yelp_id} />
                        <input type='text' name='name' defaultValue={this.props.name} />
                        <input type='text' name='phone' defaultValue={this.props.phone} />
                        <input type='text' name='url' defaultValue={this.props.url} />
                        <input type='text' name='price' defaultValue={this.props.price} />
                        <input type='text' name='rating' defaultValue={this.props.rating} />
                        <input type='text' name='visited' defaultValue= "0" />
                        <button type="submit">Favorite</button>
                        </form>
                    </div>
            )
        }  
    }





export default SearchResults