'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var MemoSchema = new Schema({
  markup: {type: String, required: true}
});

module.exports = mongoose.model('Memo', MemoSchema);