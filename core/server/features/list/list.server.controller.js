var ListItem = require('./list.server.model');

module.exports = {

    // Add Item
    addListItem: function (req, res) {
        new ListItem(req.body).save(function (err, item) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(item);
            }
        });
    },

    // Get Item
    getListItem: function (req, res) {
        ListItem.find().then(function (items) {
            res.send(items);
        });
    },

    // Update Item
    updateListItem: function (req, res) {
        ListItem.findByIdAndUpdate(req.params.id, req.body, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
    },

    // Delete Item
    deleteListItem: function (req, res) {
        ListItem.findByIdAndRemove(req.params.id, function (err, result) {
            if (err) {
                res.status(500).send(err);
            } else {
                res.send(result);
            }
        });
    }




};