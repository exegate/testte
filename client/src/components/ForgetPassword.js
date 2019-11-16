import React, { Component } from 'react';

import { Input, Label, Button } from 'reactstrap'

import '../assets/css/ForgetPassword.css'


class Forgetpassword extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            successful: false
        }
    }

    forget = () => {
        fetch('http://localhost:5000/forgetpassword', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email
            })
        })
        .then(response => response.json())
        .then(resp => {
            console.log(resp)
            window.location.href = '/fg_successful'
        })
        .catch(err => console.log('ERROR! ' + err))
    }

    onChangeEmail = event => {
        let input = event.target.value;
        this.setState({
            email: input
        })
    }
    

    render() {
        return(
            <div className="forgetpassword">
                <div className="forgetpassword_inputs">
                    <div className="forgetpassword_email">
                        <Label>Email</Label>
                        <Input onChange={e => this.onChangeEmail(e)} value={this.state.email} placeholder='Email'/>
                    </div>
                </div>
                <div className="forgetpassword_forget">
                    <Button color='primary' size="lg" outline onClick={this.forget}>Восстановить</Button>
                </div>
                <div className="forgetpassword_buttons">
                    <Button color='primary' outline href="/login">Логин</Button>
                    <Button color='primary' outline href="/registration">Регистрация</Button>
                </div>
            </div>
        )
    }
}

export default Forgetpassword