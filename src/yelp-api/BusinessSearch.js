import React from 'react'
import Search from '../Search'
import SearchResults from '../SearchResults'

class BusinessSearch extends React.Component {

    //setup the constructor with the default props and states
    constructor(props) {
        super(props)
        this.state = {
            restaurant: [],
            error: null,
            params: {
                location: '',
                term: ''
            }
        }
    }

    // convert query parameter from an object to a string
    formatQueryParams(params) {
        const queryItems = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        return queryItems.join('&')
    }

    // if an integer is empty, undefinded or null, default it to 0
    checkInteger(inputInteger) {
        let outputValue = inputInteger
        if (inputInteger === "") {
            outputValue = 0
        }
        if (inputInteger === undefined) {
            outputValue = 0
        }
        if (inputInteger == null) {
            outputValue = 0
        }
        return outputValue
    }

    // if a string is undefinded or null, default it to "no details"
    checkString(inputString) {
        let outputText = inputString
        if (inputString === undefined) {
            outputText = "no details"
        }
        if (inputString == null) {
            outputText = "no details"
        }
        return outputText
    }

    // if a URL is undefinded or null, default it to the root url "/"
    checkURL(inputURL) {
        let outputURL = inputURL
        if (inputURL === undefined) {
            outputURL = "/"
        }
        if (inputURL == null) {
            outputURL = "/"
        }
        return outputURL
    }

    // if a URL is undefinded or null, default it to the root url "/"
    checkEmptyImage(inputURL) {
        let outputURL = inputURL
        if (inputURL === undefined) {
            outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
        if (inputURL == null) {
            outputURL = "https://legacytaylorsville.com/wp-content/uploads/2015/07/No-Image-Available1.png"
        }
        return outputURL
    }

    //get the imput from the user
    handleSearch = (e) => {
        e.preventDefault()

        //create an object to store the search filters
        const data = {}

        //get all the from data from the form component
        const formData = new FormData(e.target)
        

        //for each of the keys in form data populate it with form value
        for (let value of formData) {
            data[value[0]] = value[1]
        }
        console.log(formData)
        //assigning the object from the form data to params in the state
        this.setState({
            params: data
        })

        //check if the state is populated with the search params data
        console.log(this.state.params)

        //get the yelp api url
        

        //format the queryString paramters into an object
        //const queryString = this.formatQueryParams(data)

        //sent all the params to the final url
        const api = `http://localhost:8000/api/restaurants-by-location-api-data/${data.term}/${data.location}`
        console.log(data.term)
        console.log(data.location)


        //useing the url and paramters above make the api call
        fetch(api)
            // if the api returns data ...
            .then(res => {
                if (!res.ok) {
                    throw new Error('Something went wrong, please try again later.')
                }

                // ... convert it to json
                return res.json()
            })

            // use the json api output
            .then(data => {

                //check if there is meaningfull data
                console.log(data);

                // check if there are no results
                if (data.totalItems === 0) {
                    throw new Error('No Restaurants found')
                }

                // create and object with each one of the results
                const aRestaurant = data.businesses.map(restaurant => {
                    //console.log("aRestaurant")

                    // get the name, rating, price, review_count, 
                    const { name, rating, price, review_count, url } = restaurant
                    



                    let validatedOutput = {
                        name: this.checkString(name),
                        rating: this.checkInteger(rating),
                        price: this.checkString(price),
                        review_count: this.checkInteger(review_count),
                        url: this.checkString(url)
                    }

                    //check if the data validation works
                    //console.log(validatedOutput);

                    // fix the inconsitent results and return them
                    return validatedOutput;
                })

                //check if the validated data is structured in a new array objects

                //send all the results to the state
                this.setState({
                    restaurant: aRestaurant,
                    error: null
                })
            })

            //catch connection errors
            .catch(err => {
                this.setState({
                    error: err.message
                })
            })
            console.log(api)

    }

    render() {

        //if there is an error message display it
        const errorMessage = this.state.error ? <div>{this.state.error}</div> : false

        //get all the books from the state and map each book for the corresponding component
        const restaurants = this.state.restaurant.map((restaurant, i) => {
            return <SearchResults
                key={i}
                name={restaurant.name}
                rating={restaurant.rating}
                price={restaurant.price}
                review_count={restaurant.review_count}
                url={restaurant.url}
            />
        })


        return (
            <div className="App">
                <Search handleSearch={this.handleSearch} />
                {errorMessage}
                <div className="search-results-wrapper">
                {restaurants}
                </div>
            </div>
        )
    }
}

export default BusinessSearch
