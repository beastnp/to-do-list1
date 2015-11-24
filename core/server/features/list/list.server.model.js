var     mongoose = require('mongoose')
    ,   Schema = mongoose.Schema;
    

var ListItem = Schema({

        title: { type: String, required: true }
    ,   description: { type: String, required: true }
    ,   due: { type: Date, required: true }

})

module.exports = mongoose.model('ListItem', ListItem);