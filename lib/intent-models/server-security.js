const IntentBase = require('./Base');
const IntentSecurityScheme = require('./security-scheme');

/**
 * 
 * @class
 * @alias module:@asyncapi/parser#IntentServerSecurity
 * @extends IntentBase
 * @returns {SecurityScheme}
 */
class IntentServerSecurity extends IntentBase {
  /**
     * @returns {IntentSecurityScheme}
     */
  securityScheme() { return new IntentSecurityScheme();}
    
  /**
     * @returns {string[]}
     */
  values() { return []; }
}

module.exports = IntentServerSecurity;