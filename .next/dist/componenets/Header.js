'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/alpha/kode/fundingBlock/componenets/Header.js';


var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      buttonConnect: 'Connect Wallet'
    }, _this.getAccount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var accounts, account;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return ethereum.request({ method: 'eth_requestAccounts' });

            case 2:
              accounts = _context.sent;
              account = accounts[0];

              _this.setState({ buttonConnect: 'Connected' });

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_semanticUiReact.Menu, { style: { marginTop: '12px' }, size: 'massive', color: 'green', inverted: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'bitcoin', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), 'Funding Block')), _react2.default.createElement(_semanticUiReact.Menu.Menu, { position: 'right', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { onClick: this.getAccount, color: 'green', content: this.state.buttonConnect, __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, _react2.default.createElement('a', { className: 'item', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'add square', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })))));
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVuZXRzL0hlYWRlci5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkljb24iLCJNZW51IiwiTGluayIsIkhlYWRlciIsInN0YXRlIiwiYnV0dG9uQ29ubmVjdCIsImdldEFjY291bnQiLCJldGhlcmV1bSIsInJlcXVlc3QiLCJtZXRob2QiLCJhY2NvdW50cyIsImFjY291bnQiLCJzZXRTdGF0ZSIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBTzs7OztBQUNkLEFBQVMsQUFBUSxBQUFNOztBQUN2QixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUdiOzs7Ozs7Ozs7Ozs7Ozs7NE0sQUFDSjtxQixBQUFNLEFBQ1U7QUFEVixBQUNKLGEsQUFHRixzRkFBVyxtQkFBQTtvQkFBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTtxQkFDYyxTQUFBLEFBQVMsUUFBUSxFQUFFLFFBRGpDLEFBQ2MsQUFBaUIsQUFBVTs7aUJBQTVDO0FBREcsa0NBRUg7QUFGRyx3QkFFTyxTQUZQLEFBRU8sQUFBUyxBQUN6Qjs7b0JBQUEsQUFBSyxTQUFTLEVBQUMsZUFITixBQUdULEFBQWMsQUFBZTs7aUJBSHBCO2lCQUFBOzhCQUFBOztBQUFBO2tCQUFBO0E7Ozs7OzZCQUtILEFBQ047NkJBQ0UsQUFBQyx1Q0FBSyxPQUFPLEVBQUMsV0FBZCxBQUFhLEFBQVksVUFBUyxNQUFsQyxBQUF1QyxXQUFVLE9BQWpELEFBQXVELFNBQVEsVUFBL0Q7b0JBQUE7c0JBQUEsQUFDQTtBQURBO09BQUEsa0JBQ0EsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDSTtBQURKO3lCQUNJLGNBQUEsT0FBRyxXQUFILEFBQWE7b0JBQWI7c0JBQUEsQUFBb0I7QUFBcEI7eUJBQW9CLEFBQUMsdUNBQUssTUFBTixBQUFXO29CQUFYO3NCQUFwQixBQUFvQjtBQUFBO1VBRnhCLEFBQ0EsQUFDSSxBQUVKLG1DQUFDLGNBQUQsc0JBQUEsQUFBTSxRQUFLLFVBQVgsQUFBb0I7b0JBQXBCO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDLHlDQUFPLFNBQVMsS0FBakIsQUFBc0IsWUFBYSxPQUFuQyxBQUF5QyxTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQS9ELEFBQXFFO29CQUFyRTtzQkFERixBQUNFLEFBQ0E7QUFEQTswQkFDQSxBQUFDLDhCQUFLLE9BQU4sQUFBWTtvQkFBWjtzQkFBQSxBQUNJO0FBREo7eUJBQ0ksY0FBQSxPQUFHLFdBQUgsQUFBYTtvQkFBYjtzQkFBQSxBQUFvQjtBQUFwQjt5QkFBb0IsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBUjVCLEFBQ0UsQUFJQSxBQUVFLEFBQ0ksQUFBb0IsQUFNN0I7QUFONkI7Ozs7OztBLEFBbkJYLEFBNkJyQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJIZWFkZXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxwaGEva29kZS9mdW5kaW5nQmxvY2sifQ==