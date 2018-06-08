require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , session = require('express-session')
    , massive = require('massive')
    , controller = require('./controller')

const app = express();

let { SERVER_PORT, SESSION_SECRET } = process.env;

massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

// first step - set BodyParder
app.use(bodyParser.json())
// app.use(cors());
app.use(express.static(__dirname + './../build'))

// Setup session here
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

//Setup middleware here
//no need here

//ENDPOINTS
app.post('/api/register', controller.register);
app.post('/api/login', controller.login);
app.get('/api/posts', controller.getAllPosts);
app.post('/api/posts', controller.addNewPost);
app.delete('/api/posts/:id', controller.deletePost);
app.put('/api/posts/:id', controller.editPost);
app.get('/api/posts/username?post=id', controller.search);

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})