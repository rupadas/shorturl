var bookshelf = require('../db.js');

const TABLE_NAME = 'urls';

/**
 * User model.
 */
class Url extends bookshelf.Model {
  get tableName() {
    return TABLE_NAME;
  }

  get hasTimestamps() {
    return true;
  }
}

module.exports = Url;