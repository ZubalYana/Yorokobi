const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');
const users = [
    { id: 1, username: 'admin', password: 'hello0000' },
    { id: 2, username: 'vitaliy', password: '1111' },
];

passport.use(new LocalStrategy((username, password, done) => {
    const user = users.find(u => u.username == username && u.password == password);
    if (user) {
        return done(null, user);
    } else {
        return done(null, false, { message: 'Invalid username or password' });
    }
}))
passport.serializeUser((user, done) => {
    done(null, user.id);
})
passport.deserializeUser((id, done) => {
    const user = users.find(u => u.id == id);
    done(null, user);
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

app.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
    failureFlash: true
}))
app.get('/admin', isLoggedIn, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin'));
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login', 'login.html'));
})
app.get('/menu', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'menu', 'menu.html'));
})
app.get('/orders', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'orders', 'orders.html'));
})

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}


app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong!');
})
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`Server work on PORT: ${PORT}`)
})