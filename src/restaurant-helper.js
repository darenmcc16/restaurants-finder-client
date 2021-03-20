export const getRestaurantList = (restaurants=[], wishListId) => (
    (!wishListId)
      ? notes
      : restaurants.filter(restaurant => restaurant.wishListId === wishListId)
    )