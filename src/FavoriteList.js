import React from 'react'
import {API_ENDPOINT} from './config'
import TokenService from './service/token-service'



class ListOfDiets extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesById: [],
        };
    }

    showUsersFavorites() {
        let currentUser = TokenService.getUserId();
        
        // let currentUser = 1;
        //console.log(currentUser)
        let getFavoritesByUserId = `${API_ENDPOINT}/users/${currentUser}`;

        fetch(getFavoritesByUserId)
            .then((favoritesInList) => favoritesInList.json())
            .then((favoritesInList) => {
                console.log(favoritesInList)
                this.setState({
                    getFavoritesByUserId: favoritesInList,
                });

            })

            .catch((error) => this.setState({ error }));
        
    }



    deleteFavorite(event) {
        event.preventDefault();

        const data = {};

        const formData = new FormData(event.target);

        for (let value of formData) {
            data[value[0]] = value[1];
        }

       // console.log(data);

        let { favoriteId } = data;
        //console.log(dietId);


        fetch(`${API_ENDPOINT}/${favoriteId}`, {
            method: "DELETE",
            headers: {
                "content-type": "application/json",
            },
        }).then((response) => {
            window.location = `/favorites/${favoriteId}`;
        });
    }

    render() {
        return (
            <div>
            <section className='favorite-list'>
            <ul>
                <li>
                    {this.state.favoritesById}
                </li>
            </ul>
            </section>
            </div>
        )
    }
}

export default ListOfDiets;