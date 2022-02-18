'use strict'
const isObject = require('is-object')

module.exports = testObject;

function testObject(x){
    return isObject(x);
}
