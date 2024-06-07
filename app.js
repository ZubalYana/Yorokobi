const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
const path = require('path');
const fs = require('fs');
const mongoose = require('mongoose')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
mongoose.connect(`mongodb+srv://root:s7vVHHEAqtPNPIUB@root.c1gqwpt.mongodb.net/?retryWrites=true&w=majority&appName=root`)
.then(()=>{
    console.log(`Connected to mongo DB`)
})
const Products = mongoose.model('Products', {name: String, amount: Number, image: String, provider: String, availability: Boolean})
const Dishes = mongoose.model('Dishes', {name: String, price: Number, image: String, rating: Number, availability: Boolean, type: String})
const Orders = mongoose.model('Orders', { list: Array, name: String, phone: String, status: Boolean, message: String})

const users = [
    { id: 1, username: 'Yorokobi Admin', password: '2024' },
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
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}
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
app.get('/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contacts', 'contacts.html'));
})
app.post('/add-products', async (req, res) => {
    console.log(req.body)
    try {
        const { name, amount, image, provider, availability } = req.body;
        const products = new Products({ name, amount, image, provider, availability });
        await products.save();
        console.log(`A product created`);
        res.status(201).json(products);
    } catch (err) {
        res.status(500).json({ message: err })
    }
})
app.get('/products', async (req, res)=>{
    try {
        const products = await Products.find();
        res.json(products)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})
app.post('/add-dishes', async (req, res) => {
    console.log(req.body)
    try {
        const { name, price, image, rating, provider, availability, type } = req.body;
        const dishes = new Dishes({ name, price, image, rating, provider, availability, type });
        await dishes.save();
        console.log(`A dish created`);
        res.status(201).json(dishes);
    } catch (err) {
        res.status(500).json({ message: err })
    }
})
app.get('/dishes', async (req, res)=>{
    try {
        const dishes = await Dishes.find();
        res.json(dishes)
    } catch (err) {
        res.status(500).json({ message: err })
    }
})
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

