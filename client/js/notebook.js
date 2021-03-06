/**
 * converts any div with a class name of tonic
 * into a tonic code executable code block
 *
 */

/** get functional helpers */
var ref = require('ramda');
var compose = ref.compose;
var map = ref.map;

/** get selectors */
var selectors = function (s) { return document.querySelectorAll(s); }
/** create notebook */
var create = function (element) {
  if (Tonic) {
    var code = element.innerText
    element.innerText = ''
    Tonic.createNotebook({ element: element, source: code })
  }
  return element
}

/** export module */
module.exports = function (_) { return compose(map(create),selectors)('.tonic'); }
