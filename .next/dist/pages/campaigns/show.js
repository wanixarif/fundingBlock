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

var _Layout = require('../../componenets/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require('semantic-ui-react');

var _routes = require('../../routes');

var _campaign = require('../../ethereuem/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../../ethereuem/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/alpha/kode/fundingBlock/pages/campaigns/show.js?entry';


var CampaignShow = function (_Component) {
  (0, _inherits3.default)(CampaignShow, _Component);

  function CampaignShow() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, CampaignShow);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      contributionAmount: '',
      message: '',
      loading: false,
      requestsLoading: false
    }, _this.onSubmit = function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
        var accounts;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event.preventDefault();
                _this.setState({ message: '' });
                _this.setState({ loading: true });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return (0, _campaign2.default)(_this.props.contractAddress).methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.contributionAmount, 'ether')
                });

              case 9:
                _routes.Router.replaceRoute("/campaigns/" + _this.props.contractAddress);

                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context['catch'](3);

                _this.setState({ message: _context.t0['message'] });

              case 15:

                _this.setState({ loading: false });

              case 16:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this2, [[3, 12]]);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(CampaignShow, [{
    key: 'renderCard',
    value: function renderCard() {
      var items = [{
        header: 'Address of this campaign',
        description: this.props.contractAddress,
        meta: 'Campaign Address',
        style: { overflowWrap: 'break-word' }
      }, {
        header: 'Address of the creator of this campaign',
        description: this.props.manager,
        meta: 'Manager',
        style: { overflowWrap: 'break-word' }
      }, {
        header: _web2.default.utils.fromWei(this.props.balance, 'ether'),
        description: 'Funds available right now',
        meta: 'Campaign balance'
      }, {
        header: _web2.default.utils.fromWei(this.props.amountSpent, 'ether'),
        description: 'Total amount withdrawn so far',
        meta: 'Funds spent'
      }, {
        header: _web2.default.utils.fromWei(this.props.amountRaised, 'ether'),
        description: 'Total amount raised so far',
        meta: 'Funds raised'
      }, {
        header: this.props.contributorCount,
        description: 'Number of people who contributed to this campaign',
        meta: 'Contributors'
      }, {
        header: this.props.requestsCount - this.props.finalizedRequestsCount,
        description: 'Withdrawal requests yet to be finalized',
        meta: 'Active requests'
      }, {
        header: this.props.finalizedRequestsCount,
        description: 'Withdrawal requests finalized so far',
        meta: 'Finalized requests'
      }];
      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'red', __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, this.props.campaignTitle), _react2.default.createElement(_semanticUiReact.Card.Description, { floated: 'left', __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement(_semanticUiReact.Image, {
        floated: 'right',
        size: 'small',
        src: this.props.campaignImageURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), this.props.campaignDescription)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('div', { className: 'ui two', __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, this.props.category, ' | Created by: ', this.props.campaignCreatorName, _react2.default.createElement('a', { style: { float: 'right' }, href: this.props.website, target: '_blank', __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'globe', __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), this.props.website)))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 12, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Group, { itemsPerRow: 2, items: this.renderCard(), __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      })), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 4, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.message, __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement('label', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, 'Contribute to this campaign:'), _react2.default.createElement(_semanticUiReact.Input, {
        type: 'number',
        step: 'any',
        label: 'ETH',
        labelPosition: 'right',
        value: this.state.contributionAmount,
        onChange: function onChange(event) {
          return _this3.setState({ contributionAmount: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      })), _react2.default.createElement(_semanticUiReact.Message, {
        error: true,
        header: 'Oops!',
        content: this.state.message,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }), _react2.default.createElement('div', { className: 'ui two', __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', basic: true, color: 'green', __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Contribute'), _react2.default.createElement('span', { style: { float: 'right' }, __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, 'Minimum: ', _web2.default.utils.fromWei(this.props.minimumContribution, 'ether')))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.contractAddress + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, color: 'green',
        loading: this.state.requestsLoading,
        onClick: function onClick(event) {
          _this3.setState({ requestsLoading: true });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, 'View Requests')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
        var contractAddress, campaign, summary, stringSummary, finalizedRequestsCount, amountSpent, amountRaised;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                contractAddress = props.query.address;
                _context2.next = 3;
                return (0, _campaign2.default)(contractAddress);

              case 3:
                campaign = _context2.sent;
                _context2.next = 6;
                return campaign.methods.showCampaignDetails().call();

              case 6:
                summary = _context2.sent;
                _context2.next = 9;
                return campaign.methods.showCampaignStrings().call();

              case 9:
                stringSummary = _context2.sent;
                _context2.next = 12;
                return campaign.methods.getFinalizedRequestsCount().call();

              case 12:
                finalizedRequestsCount = _context2.sent;
                _context2.next = 15;
                return campaign.methods.amountSpent().call();

              case 15:
                amountSpent = _context2.sent;
                _context2.next = 18;
                return campaign.methods.amountRaised().call();

              case 18:
                amountRaised = _context2.sent;
                return _context2.abrupt('return', {
                  contractAddress: contractAddress,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  contributorCount: summary[3],
                  manager: summary[4],
                  campaignTitle: stringSummary[0],
                  campaignDescription: stringSummary[1],
                  category: stringSummary[2],
                  website: stringSummary[3],
                  campaignImageURL: stringSummary[4],
                  campaignCreatorName: stringSummary[5],
                  finalizedRequestsCount: finalizedRequestsCount,
                  amountSpent: amountSpent,
                  amountRaised: amountRaised
                });

              case 20:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function getInitialProps(_x2) {
        return _ref3.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNhcmQiLCJHcmlkIiwiSW1hZ2UiLCJJY29uIiwiUm91dGVyIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInN0YXRlIiwiY29udHJpYnV0aW9uQW1vdW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJyZXF1ZXN0c0xvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwcm9wcyIsImNvbnRyYWN0QWRkcmVzcyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwibWFuYWdlciIsImZyb21XZWkiLCJiYWxhbmNlIiwiYW1vdW50U3BlbnQiLCJhbW91bnRSYWlzZWQiLCJjb250cmlidXRvckNvdW50IiwicmVxdWVzdHNDb3VudCIsImZpbmFsaXplZFJlcXVlc3RzQ291bnQiLCJjYW1wYWlnblRpdGxlIiwiY2FtcGFpZ25JbWFnZVVSTCIsImNhbXBhaWduRGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImNhbXBhaWduQ3JlYXRvck5hbWUiLCJmbG9hdCIsIndlYnNpdGUiLCJyZW5kZXJDYXJkIiwidGFyZ2V0IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInF1ZXJ5IiwiYWRkcmVzcyIsImNhbXBhaWduIiwic2hvd0NhbXBhaWduRGV0YWlscyIsImNhbGwiLCJzdW1tYXJ5Iiwic2hvd0NhbXBhaWduU3RyaW5ncyIsInN0cmluZ1N1bW1hcnkiLCJnZXRGaW5hbGl6ZWRS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QUNlLFNBQUEsQUFBUyxRQUFULEFBQWlCLHNCLEFBQWpCLEFBQXVDOzttQkFBdEQ7QTs7dUJBQ3FCLFNBQUEsQUFBUyxRQUFULEFBQWlCLHNCLEFBQWpCLEFBQXVDOzttQkFBNUQ7QTs7dUJBQzhCLFNBQUEsQUFBUyxRQUFULEFBQWlCLDRCLEFBQWpCLEFBQTZDOzttQkFBM0U7QTs7dUJBQ21CLFNBQUEsQUFBUyxRQUFULEFBQWlCLGMsQUFBakIsQUFBK0I7O21CQUFsRDtBOzt1QkFDb0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsZSxBQUFqQixBQUFnQzs7bUJBQXBEO0E7O21DQUVDLEFBQ2EsQUFDaEI7dUNBQW9CLFFBRmpCLEFBRWlCLEFBQVEsQUFDNUI7MkJBQVEsUUFITCxBQUdLLEFBQVEsQUFDaEI7aUNBQWMsUUFKWCxBQUlXLEFBQVEsQUFDdEI7b0NBQWlCLFFBTGQsQUFLYyxBQUFRLEFBQ3pCOzJCQUFRLFFBTkwsQUFNSyxBQUFRLEFBQ2hCO2lDQUFjLGNBUFgsQUFPVyxBQUFjLEFBQzVCO3VDQUFvQixjQVJqQixBQVFpQixBQUFjLEFBQ2xDOzRCQUFTLGNBVE4sQUFTTSxBQUFjLEFBQ3ZCOzJCQUFRLGNBVkwsQUFVSyxBQUFjLEFBQ3RCO29DQUFpQixjQVhkLEFBV2MsQUFBYyxBQUMvQjt1Q0FBb0IsY0FaakIsQUFZaUIsQUFBYyxBQUNsQzswQ0FiRyxBQWFvQixBQUN2QjsrQkFkRyxBQWNTLEFBQ1o7Z0MsQUFmRyxBQWVVO0FBZlYsQUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBLEFBWmUsQUErTTNCOztrQkFBQSxBQUFlIiwiZmlsZSI6InNob3cuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxwaGEva29kZS9mdW5kaW5nQmxvY2sifQ==