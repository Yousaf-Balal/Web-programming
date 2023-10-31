const localStrategy = require("passport-local").Strategy

function initialise(passport) {
    const authenticateUser = (email, password, done) => {

    }
    passport.use(new localStrategy({usernameField: 'email'}), authenticateUser)
}