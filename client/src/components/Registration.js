import React, { Component } from 'react';

import { Input, Label, Button } from 'reactstrap'

import '../assets/css/Registration.css'


class Registration extends Component {
    state = {
        email: '',
        password: '',
        password2: '',
        login: '',
        username: ''
    }

    register = () => {
        fetch('http://localhost:5000/registration', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                login: this.state.login,
                username: this.state.username
            })
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            window.location.href = '/login'
        })
        .catch(err => console.log('ERROR! ' + err))
    }

    onChangeEmail = event => {
        let input = event.target.value;
        this.setState({
            email: input
        })
    }

    onChangePassword = event => {
        let input = event.target.value;
        this.setState({
            password: input
        })
    }

    onChangePassword2 = event => {
        let input = event.target.value;
        this.setState({
            password2: input
        })
    }

    onChangeLogin = event => {
        let input = event.target.value;
        this.setState({
            login: input
        })
    }

    onChangeUsername = event => {
        let input = event.target.value;
        this.setState({
            username: input
        })
    }
    

    render() {
        return(
            <div className="registration">
                <div className="registration_inputs">
                    <div className="registration_email">
                        <Label>Email`</Label>
                        <Input onChange={e => this.onChangeEmail(e)} value={this.state.email} placeholder='Email'/>
                    </div>
                    <div className="registration_password">
                        <Label>Пароль</Label>
                        <Input onChange={e => this.onChangePassword(e)} value={this.state.password} placeholder='Пароль'/>
                    </div>
                    <div className="registration_password2">
                        <Label>Подтвердите пароль</Label>
                        <Input onChange={e => this.onChangePassword2(e)} value={this.state.password2} placeholder='Подтвердите пароль'/>
                    </div>
                    <div className="registration_login">
                        <Label>Логин</Label>
                        <Input onChange={e => this.onChangeLogin(e)} value={this.state.login} placeholder='Логин'/>
                    </div>
                    <div className="registration_username">
                        <Label>Username</Label>
                        <Input onChange={e => this.onChangeUsername(e)} value={this.state.username} placeholder='Username'/>
                    </div>
                </div>
                <div className="registration_register">
                    <Button color='primary' size="lg" outline onClick={this.register}>Зарегистрироваться</Button>
                </div>
                <div className="registration_login">
                    <Button color='primary' outline href="/login">Войти</Button>
                </div>
            </div>
        )
    }
}

export default Registration