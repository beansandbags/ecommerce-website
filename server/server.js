const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoStore = require("connect-mongo")(session);

const passport = require('./passport/setup');
const auth = require('./routes/api/auth');

const products = require('./routes/api/products');

const app = express();

mongoose.Promise = global.Promise;

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
    .connect(db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Use routes
app.use(express.json());
app,use(exoress.urlencoded({ extended: false }));


app.use(
    session({
        secret: "coffee bean",
        resave: false,
        saveUninitialized: true,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
    })  
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", auth);

app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));