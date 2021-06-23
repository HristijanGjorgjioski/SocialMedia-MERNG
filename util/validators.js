module.exports.validateRegisterInput = (username, email, password, confirmPassword) => {
    const errors = {};

    (username.trim === '') ? errors.username = 'Username must not be empty' : null;
    
    (email.trim === '') ? errors.email = 'Email must not be empty' : null;

    (password.trim === '') ? errors.password = 'Password must not be empty' : null;

    (password !== confirmPassword) ? errors.confirmPassword = 'Password must match' : null;

    return {
        errors,
        valid: Object.keys(errors).length < 1
    }
}