var     express = require('express')
    ,   bodyParser = require('body-parser')
    ,   cors = require('cors')
    ,   mongoose = require('mongoose')
    ,   listCtrl = require('./core/server/features/list/list.server.controller')
    ,   port = 8090
    ,   app = express()
    ,   mongoUri = 'mongodb://localhost:27017/to-do-list';

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/core/public'));


app.get('/api/lists', listCtrl.getListItem);
app.post('/api/lists', listCtrl.addListItem);
app.put('/api/lists/:id', listCtrl.updateListItem);
app.delete('/api/lists/:id', listCtrl.deleteListItem);




app.listen(port, function() {
    console.log('Listening on port ' + port);
});

mongoose.connect(mongoUri);
mongoose.connection.once('open', function() {
    console.log('Connected to MondoDB at ' + mongoUri);
});