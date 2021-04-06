import React from 'react'
import {API_ENDPOINT} from './config'
import TokenService from './service/token-service'



class Inventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favoritesByUserId: [],

        };
    }



    componentDidMount() {

        let currentUser = TokenService.getUserId();
        // console.log(currentUser)

        //if the user is not logged in, send him to landing page
        if (!TokenService.hasAuthToken()) {
            window.location = '/'
        }





        let getFavsByUserIdUrl = `${API_ENDPOINT}/favorites/users/${currentUser}`;

        fetch(getFavsByUserIdUrl)
            .then((favsInList) => favsInList.json())
            .then((favsInList) => {
                // console.log(itemsInList)
                this.setState({
                    favoritesByUserId: favsInList,
                });
                // console.log(this.state);
            })

            .catch((error) => this.setState({ error }));
    }



    render() {



        // console.log(this.state.itemsByUserId.length)
        let showFavsList = ''
        //by default show there are no items
        if (this.state.favoritesByUserId.length === 0) {
            showFavsList =
            <tbody>
                <tr className="favsByUser">
                    <td>No Favorites</td>
             </tr>
            </tbody>
                
        }
        // if there are items 
        else {

            // display details for each one of the items
            console.log(this.state.favoritesByUserId)
            showFavsList = this.state.favoritesByUserId.map((item, key) => {
               
                if (item) {
                    return (
                        <tbody key = {key}>
                        <tr>  
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>
                                <a href={item.url}>Yelp Page</a>
                            </td>
                            <td>{item.price}</td>
                            <td>{item.rating}</td>
                        </tr>
                        </tbody>
                    )
                }
            })
        }


        return (
            <div className="Favorites">
                <section id="FavoritePage">
                <table className ="FavoriteTable">
                <colgroup>
                    <col span = "4"/>
                    <col span = "4"/>
                    <col span = "4"/>
                    <col span = "4"/>
                </colgroup>
                
                <tbody>
                <tr>
                    <th>
                        Name
                    </th>
                    <th>
                        Phone
                    </th>

                    <th>
                        Url
                    </th>
                    <th>
                        Price
                    </th>
                    <th>
                        Rating
                    </th>
                </tr>
                </tbody>
                    {showFavsList}
                    </table>

                </section>
            </div>
        );
    }
}

export default Inventory;