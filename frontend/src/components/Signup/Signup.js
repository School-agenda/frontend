import React from 'react';



class SignUp extends React.Component {

    state = {
        credentials: {
            name: '',
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        console.log(e.target.value)
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    SignUp = e => {
        e.preventDefault();
    }



}