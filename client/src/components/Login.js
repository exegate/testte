import React, { Component } from 'react';

import { Input, Label, Button } from 'reactstrap'

import getBrowserFingerprint from 'get-browser-fingerprint';

import '../assets/css/Login.css'


class Login extends Component {
    state = {
        login: '',
        password: '',
        fingerprint: getBrowserFingerprint()
    }

    enter = () => {
        fetch('http://localhost:5000/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: this.state.login,
                password: this.state.password,
                fingerprint: this.state.fingerprint
            })
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            window.location.href = '/lg_successful'
        })
        .catch(err => console.log('ERROR! ' + err))
    }

    onChangeLogin = event => {
        let input = event.target.value;
        this.setState({
            login: input
        })
    }

    onChangePassword = event => {
        let input = event.target.value;
        this.setState({
            password: input
        })
    }
    

    render() {
        return(
            <div className="login">
                <div className="login_inputs">
                    <div className="login_login">
                        <Label>Логин</Label>
                        <Input onChange={e => this.onChangeLogin(e)} value={this.state.login} placeholder='Логин'/>
                    </div>
                    <div className="login_password">
                        <Label>Пароль</Label>
                        <Input onChange={e => this.onChangePassword(e)} value={this.state.password} placeholder='Пароль'/>
                    </div>
                </div>
                <div className="login_enter">
                    <Button color='primary' size="lg" outline onClick={this.enter}>Войти</Button>
                </div>
                <div className="login_buttons">
                    <Button color='primary' outline href="/registration">Регистрация</Button>
                    <Button color='primary' outline href="/forgetpassword">Забыли пароль</Button>
                </div>
            </div>
        )
    }
}

export default Login