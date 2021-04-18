var bookshelfJs = require('bookshelf');
var knexJs = require('knex');
var knexConfig = require('../src/dbconfig.js');

/**
 * Database connection.
 */
const knex = knexJs(knexConfig);
const bookshelf = bookshelfJs(knex);
module.exports = bookshelf;