var oldEnv = process.env.NODE_ENV;
process.env.NODE_ENV = 'development';
module.exports = require('prop-types');
if (oldEnv === undefined) {
    // process.env is a special object that coerces any assigned
    // values to strings; so we have to properly delete the key.
    delete process.env.NODE_ENV;
} else {
    process.env.NODE_ENV = oldEnv;
}
