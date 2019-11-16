import React, { Component } from 'react';

import { Button } from 'reactstrap'

import '../assets/css/fgsuccessful.css'

class FgSuccessful extends Component {

    render() {
        return(
            <div className="fgsuccessful">
                Запрос на смену пароля успешно отправлен
                <div className="fgsuccessful_button">
                    <Button color='primary' outline href="login">Войти</Button>
                </div>
            </div>
        )
    }
}

export default FgSuccessful