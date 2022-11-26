const express = require('express');
const path = require('path');
const morgan = require('morgan');
const engine = require('ejs-mate');
const session = require('express-session');
const passport = require('passport');

// Initialations.

const app = express();

// Server settings.

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// Middlewares.

app.use(morgan('dev'));


// Global variables.

// Routes.

app.use(require('./routes/index'));
app.use(require('./routes/users'));

// Static files.

// Server running.

app.listen(app.get('port'), () =>{

    console.log('Server running on port', app.get('port'));

});