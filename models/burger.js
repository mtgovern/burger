var orm = require('../config/orm.js');

// create code that will call ORM functions using burger input for ORM.
var burger =
{
    selectAll: function(callback) {
        orm.selectAll(function(res) {
            callback(res);
        });
    },

    insertOne: function(burger_name, callback) {
        orm.insertOne(burger_name, function(res) {
            callback(res);
        });
    },

    updateOne: function(burger_id, callback) {
        orm.updateOne(burger_id, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;