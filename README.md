
# Restaurant Finder Client
Hungry but don't know where to eat?  Restaurant Finder will be able to help you pick your next restaurant destination


### 1. Working Prototype
(Example) You can access a working prototype of the React app here: https://your-app-client.herokuapp.com/ and Node app here: https://restaurant-finder-serv.herokuapp.com/



### 2. User Stories
This app is for two types of users: a visitor and a logged-in user

###### Landing Page (Importance - High) (Est: 1h)
* as a visitor
* I want to understand what I can do with this app (or sign up, or log in)
* so I can decide if I want to use it

###### Login Page (Importance - High) (Est: 3h)
* As a returning register user
* I want to enter my password and username to use this app,
* So I can have access to my account.
* As a new user.
* I want to be able to create a profile and set my username and password
* As an Administrator I want to be able to view all usernames and passwords

###### Sign Up (Importance - High)  (Est: 3h)
* As a visitor
* I want to register to use this app
* So I can create a personal account.

###### Home Page (Importance - Medium)  (Est: 2h)
* As a logged-in user,
* I want to be able to preview the content of the app,
* So i can decide what section I want to navigate to.
* As a logged-in user, I want to be able to search restaurants using the search restaurant feature.
* As a logged-in user, I want to save restaurants to "My Wish List".
* As a logged-in user, I want to save restaurants to "My Favorites" list.
* As a logged-in user, I want to be able to view reviews on the restaurants that I either have on the wish list or have favorite.


### 3. Functionality
The app's functionality includes:
* Every User has the ability to create an account
* Every user has the ability to create a restaurant wish list.
* Every user has the ability to create a favorites list.



### 4. Technology
* Front-End: HTML5, CSS3, JavaScript ES6, React
* Back-End: Node.js, Express.js, Mocha, Chai, RESTful API Endpoints, Postgres
* Development Environment: Heroku, DBeaver



### 5. Wireframes (to do now)
Landing Page
:-------------------------:
![Landing Page](/github-images/wireframes/Client-Wireframe.png)





### 6. Front-end Structure - React Components Map
* __Index.js__ (stateless)
    * __App.js__ (stateful)
        * __LandingPage.js__ (stateful) - gets the _"prop name"_ and the _"callback prop name"_ from the __App.js__
            * __Login.js__ (stateful) -
            * __Register.js__ (stateful) -
        * __Navbar.js__ (stateless) -
        * __BusinessSearch.js__ (stateful) -
        * __FavoriteList.js__ (stateless) -



### 7. Back-end Structure - Business Objects
* Users (database table)
    * id (auto-generated)
    * username (email validation)
    * password (at least 8 chars, at least one alpha and a special character validation)
* Favorites table
    * id (auto-generated)
    * user id (forign key user table)
    * yelp_id (from api varchar 255)
    * name (from api varchar 255)
    * phone (from api varchar 255)
    * url (from api varchar 255)
    * price (from api varchar 5)
    * rating (from api varchar 4)



### 8. API Documentation
#### API Overview
```text
    /api
    .
    ├── /auth
    │   └── POST
    │       ├── /login
    ├── /users
    │   └── POST
    │       └── /
```

##### POST `/api/auth/login`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "Password1"
    }

    // res.body
    {
    "authToken": String,
        "userId": 1
    }
```

##### POST `/api/users/`
```js
    // req.body
    {
        "user_name": "demo@gmail.com",
        "password": "123456"
    }


    // res.body
    {
        "id": 1,
        "user_name": "demo@gmail.com"
    }
```



### 9. Screenshots (to do later)
(Example) Landing Page
:-------------------------:
![Landing Page](/github-images/screenshots/landing.jpg)
Sign up page
![Register Page](/github-images/screenshots/singup.jpg)
Login Page
![Login Page](/github-images/screenshots/login.jpg)
Business Search Page
![Business Search Page](/github-images/screenshots/business-search.jpg)
Favorites Page
![Favorites Page](/github-images/screenshots/favorites.jpg)



### 10. Development Roadmap
This is v1.0 of the app, but future enhancements are expected to include:
* Add call to yelp API
* Create favorite list to display user favorites



### 11. How to run it
Use command line to navigate into the project folder and run the following in terminal

##### Local React scripts
* To install the react project ===> npm install
* To run react (on port 3000) ===> npm start
* To run tests ===> npm run test

##### Local Node scripts
* To install the node project ===> npm install
* To migrate the database ===> npm run migrate -- 1
* To run Node server (on port 8000) ===> npm run dev
* To run tests ===> npm run test