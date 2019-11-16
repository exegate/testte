const postLogin = (req, res) => {
    const { login, password, fingerprint } = req.body
    console.log('Login request:')
    console.log('Login - ' + login)
    console.log('Password - ' + password)
    console.log('Fingerprint - ' + fingerprint)
    res.json({successful: true})
}

const postRegistration = (req, res) => {
    const { email, password, login, username } = req.body
    console.log('Registration request:')
    console.log('Email - ' + email)
    console.log('Password - ' + password)
    console.log('Login - ' + login)
    console.log('Username - ' + username)
    res.json({successful: true})
}

const postForgetpassword = (req, res) => {
    const { email } = req.body
    console.log('Forget request:')
    console.log('Email - ' + email)
    res.json({successful: true})
}

module.exports = {
    postLogin,
    postRegistration,
    postForgetpassword
}