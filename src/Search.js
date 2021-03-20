import React from 'react'

class Search extends React.Component {
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSearch}>
                    <label>Find:</label>
                    <input type='text'
                    name='term' 
                    className='search-bar'
                    placeholder='pizza, restaurant name'
                    required />
                    <label>Near:</label>
                    <input
                    name='location'
                    type='text'
                    className='location'
                    placeholder='chicago'
                    required />
                    <button type="submit">search</button>
                </form>
            </div>
        )
    }
}

export default Search
