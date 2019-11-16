import React, { Component } from 'react';

import { Button } from 'reactstrap'

import '../assets/css/fgsuccessful.css'

class LgSuccessful extends Component {

    render() {
        return(
            <div className="fgsuccessful">
                Успешно вошли
                <div className="fgsuccessful_button">
                    <Button color='primary' outline href="login">Выйти</Button>
                </div>
            </div>
        )
    }
}

export default LgSuccessful