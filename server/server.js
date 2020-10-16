const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session')
const MongoStore = require("connect-mongo")(session);
const cors = require("cors");
const passport = require('passport');

const cookieSession = require('cookie-session');

const keys = require('./config/keys')

//const passport = require('./passport/setup');
const passportSetup = require('./config/passport-setup')
const authRoutes = require('./routes/api/auth');
const profileRoutes = require('./routes/api/profile-routes');

const products = require('./routes/api/products');

const app = express();

app.use(cors());

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.Promise = global.Promise;

mongoose.set('useCreateIndex', true);

app.use('/uploads', express.static('uploads'))

// Bodyparser Middleware
app.use(bodyParser.json());

                /*
                // Passport Local Config
                app.use(require('express-session')({
                    secret: 'coffee bean',
                    resave: false,
                    saveUninitialized: false
                }));
                app.use(passport.initialize());
                app.use(passport.session());

                passport.use(new LocalStrategy(User.authenticate()));
                passport.serializeUser(User.serializeUser());
                passport.deserializeUser(User.deserializeUser());
                */

// DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/uploads', express.static('uploads'));

app.use(passport.initialize());
app.use(passport.session());
app.use('/auth', authRoutes);
app.use('/profile', profileRoutes)

app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));