export const validateLoginInfo = {
    username: {
        isString: true,
        notEmpty: true,
        errorMessage: 'Username should not be empty'
    },
    password: {
        isString: true,
        notEmpty: true,
        errorMessage: 'Password should not be empty'
    }
}