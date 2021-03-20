import React from 'react'
import ValidationError from './ValidationError'
import AuthApiService from './service/auth-service'
import TokenService from './service/token-service'

class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user_name: {
                value: "",
                touched: false,
            },
            password: {
                value: "",
                touched: false,
            },
            repeatPassword:{
                value: "",
                touched: false,
            },
            city: {
                value: "",
                touched: false,
            },
            state: {
                value: "",
                touched: false,
            },
            zip: {
                value: "",
                touched: false,
            },
        };
    }

    changeUsername(user_name){
        this.setState({
            user_name: {value: user_name, touched: true}
        });
    }

    changePassword(password){
        this.setState({
            password: {value: password, touched: true}
        });
    }

    updateRepeatPassword(repeatPassword) {
        this.setState({
            repeatPassword: { value: repeatPassword, touched: true },
        });
    }

    validateUsername(){
        const user_name = this.state.user_name.value.trim();
        if(user_name.length === 0){
            return <p className="input-error">Please enter a Username</p>;
        }
        else if(user_name.length<5){
            return (
                <p className="input-error">
                    Username must be at least 5 characters long.
                </p>
            );
        }
    }

    validatePassword(){
        const password = this.state.password.value.trim();
        if(password.length === 0){
            return <p className="input-error">Password is required</p>;
        }
        else if(password.length < 8 || password.length > 72){
            return(
                <p className="input-error">
                    Password must be between 8 and 72 characters long.
                </p>
            );
        }
        else if(!password.match(/[0-9]/)){
            return(
                <p className="input-error">
                    Password must contain at least one number.
                </p>
            );
        }
    }

    validateRepeatPassword(){
        const repeatPassword = this.state.repeatPassword.value.trim();
        const password = this.state.password.value.trim();

        if(repeatPassword !==password){
            return <p className="input-error">Password does not match</p>;
        }
    }

    changeCity(city){
        this.setState({
            city: {value: city, touched: true}
        });
    }

    validateCity(){
        const city = this.state.city.value.trim();
        if(city.length === 0){
            return <p className="input-error">City is required</p>;
        }
        else if(city.length < 2){
            return(
            <p className="input-error">City must be at least 2 characters long</p>
            );
        }
    }

    changeState(state){
        this.setState({
            state: {value: state, touched: true}
        });
    }

    validateState(){
        const state = this.state.state.value.trim();
        if(state.length === 0){
               return <p className="input-error">State is required</p>;
        }
        else if(state.length < 2){
            return <p className="input-error">State must be at least 2 characters long</p>;
        }
    }

    changeZip(zip){
        this.setState({
            zip: {value: zip, touched: true}
        });
    }

    validateZip(){
        const zip = this.state.zip.value.trim();
        if(zip.length === 0){
            return <p className="input-error">zip is required</p>;
        }
        else if(zip.length < 5){
            return <p className="input-error">Zip must be 5 characters long</p>
        }
    }

    registerUser = (event) =>{
        event.preventDefault();
        const data = {};
        const formData = new FormData(event.target);
        for(let value of formData){
            data[value[0]] = value[1];
        }
        console.log(data);

        let {user_name,
            password,
            city,
            state,
            zip
        } = data;

        this.setState({error: null})
        AuthApiService.postUser({
            user_name,
            password,
            city,
            state,
            zip
        })
        //Make sure to add Api call here.  Make sure it functions
        .then(response =>{
            TokenService.saveAuthToken(response.authToken)
            TokenService.saveUserId(response.id)
            window.location = "/add-item"
        })

        .catch(res =>{
            this.setState({error: res.error})
        })
    }

    render(){
        const msg = this.state.error?
        <p>
            {this.state.error}
        </p>:
        <div></div>;

        return(
            <div className='Signup'>
                <section id='signUpPage'>
                    <h2>Sign Up</h2>
                    <form className='signUpForm' onSubmit={this.registerUser}>
                        <div className="errorMessage">
                            {msg}
                        </div>
                        <label htmlFor="username">Username</label>
                        <input 
                        type='text'
                        name='user_name'
                        placeholder='Username'
                        onChange={(e) =>this.changeUsername(e.target.value)}
                        required />
                        {this.state.user_name.touched && (
                            <ValidationError message={this.validateUsername()} />
                        )}
                        <label htmlFor="password">Password</label>
                        <input 
                        type='text'
                        name='password'
                        placeholder='Password'
                        onChange={(e) =>this.changePassword(e.target.value)}
                        required />
                        {this.state.user_name.touched && (
                            <ValidationError message={this.validatePassword()} />
                        )}
                        <label>Repeat Password</label>
                        <input 
                        type='text'
                        name='repeatPassword'
                        placeholder='Repeat Password'
                        onChange={(e) =>this.updateRepeatPassword(e.target.value)}
                        required />
                        {this.state.user_name.touched && (
                            <ValidationError message={this.validateRepeatPassword()} />
                        )}
                        <label>City</label>
                        <input 
                        type='text'
                        name='city'
                        placeholder='City'
                        onChange={(e) =>this.changeCity(e.target.value)}
                        required />
                        {this.state.user_name.touched && (
                            <ValidationError message={this.validateCity()} />
                        )}
                        <label>State</label>
                        <input 
                        type='text'
                        name='state'
                        placeholder='State'
                        onChange={(e) =>this.changeState(e.target.value)}
                        required />
                        {this.state.user_name.touched && (
                            <ValidationError message={this.validateState()} />
                        )}
                        <label>Zip</label>
                        <input 
                        type='text'
                        name='zip'
                        placeholder='Zip'
                        onChange={(e) =>this.changeZip(e.target.value)}
                        required />
                        {this.state.user_name.touched && (
                            <ValidationError message={this.validateZip} />
                        )}
                        <button
                        className="signup-button"
                        id="register-button"
                        type="submit"
                        disabled={this.state.submitButtonDisabled}
                        >
                            Register
                        </button>
                    </form>

                    <div className="login">
                        <p>Already have and account.</p>
                        <p>
                            <a href="/user/login">Log in here</a>
                        </p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Register;