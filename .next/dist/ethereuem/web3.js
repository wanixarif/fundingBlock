'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var KEYS = require('./KEYS.json');
var web3 = void 0;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    var provider = new _web2.default.providers.HttpProvider(KEYS.INFURA_API);
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVlbS93ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJLRVlTIiwicmVxdWlyZSIsIndlYjMiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImN1cnJlbnRQcm92aWRlciIsInByb3ZpZGVyIiwicHJvdmlkZXJzIiwiSHR0cFByb3ZpZGVyIiwiSU5GVVJBX0FQSSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQSxJQUFNLE9BQU8sUUFBUSxBQUFSLEFBQWI7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBSSxPQUFPLEFBQVAsV0FBa0IsQUFBbEIsZUFBaUMsT0FBTyxPQUFPLEFBQWQsYUFBMkIsQUFBaEUsYUFBNEUsQUFDeEU7V0FBSyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBTCxBQUNIO0FBRkQsT0FHSSxBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQWdDLEtBQUssQUFBckMsQUFBakIsQUFDQTtXQUFPLEFBQUksQUFBSixrQkFBUyxBQUFULEFBQVAsQUFDSDtBQUNEO2tCQUFlLEFBQWYiLCJmaWxlIjoid2ViMy5qcyIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbHBoYS9rb2RlL2Z1bmRpbmdCbG9jayJ9