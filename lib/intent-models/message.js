
const IntentBase = require('./Base');
// eslint-disable-next-line no-unused-vars
const Schema = require('../models/schema');
const IntentChannel = require('./channel');
const IntentOperation = require('./operation');

/**
 * 
 * @class
 * @alias module:@asyncapi/parser#IntentMessage
 * @extends IntentBase
 */
class IntentMessage extends IntentBase {
  constructor(...args) {
    super(...args);
  }
  /**
   * @returns {string}
   */
  uid() {
    return this.name() || this.ext('x-parser-message-name') || Buffer.from(JSON.stringify(this._json)).toString('base64');
  }

  /**
   * @returns {string}
   */
  name() { return 'some test name'}

  /**
   * @returns {Schema}
   */
  headers() { return new Schema({});}

  /**
   * @returns {Schema}
   */
  payload() { return new Schema({type: 'integer'});}
  /**
   * @returns {IntentChannel[]}
   */
  channels() { return [new IntentChannel()];}
  /**
   * @returns {IntentOperation[]}
   */
  operations() { return [new IntentOperation()];}
  /**
   * 
   * @returns {any} 
   */
  extension(extensionProperty) { return {}; } 
  /**
    * 
    * @returns {any} 
    */
  binding(bindingProtocol) { return {}; } 
  /**
    * 
    * @returns {string} 
    */
  contentType() { return 'application/json';}
}
module.exports = IntentMessage;
