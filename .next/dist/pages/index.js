'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require('../ethereuem/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../componenets/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require('../routes');

var _campaign = require('../ethereuem/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/alpha/kode/fundingBlock/pages/index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignIndex);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            loading: false,
            cardsLoading: false,
            loader: true,
            campaignLoader: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ loader: false });
        }
    }, {
        key: 'renderCampaigns',
        value: function renderCampaigns() {
            var _this2 = this;

            var items = this.props.campaignDetails.map(function (strings, index) {
                return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, onClick: function onClick() {
                        return _this2.setState({ campaignLoader: true });
                    }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 43
                    }
                }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + _this2.props.campaigns[index], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                    }
                }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: 'red', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 45
                    }
                }, _react2.default.createElement(_semanticUiReact.Card.Content, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 46
                    }
                }, _react2.default.createElement(_semanticUiReact.Card.Header, {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 47
                    }
                }, strings[0]), _react2.default.createElement(_semanticUiReact.Card.Description, { floated: 'left', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 48
                    }
                }, _react2.default.createElement(_semanticUiReact.Image, {
                    floated: 'right',
                    size: 'small',
                    src: strings[4],
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 49
                    }
                }), strings[1])), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 58
                    }
                }, _react2.default.createElement('div', { className: 'ui two', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                    }
                }, strings[2], ' | Created by: ', strings[5], _react2.default.createElement(_routes.Link, { route: '/campaigns/' + _this2.props.campaigns[index], __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                    }
                }, _react2.default.createElement('a', { style: { float: 'right' }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 64
                    }
                }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'chevron circle right', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 65
                    }
                }), 'View Campaign')))))));
            });

            return _react2.default.createElement(_semanticUiReact.Card.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, items);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loader, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 88
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'huge', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 89
                }
            })), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.campaignLoader, page: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 91
                }
            }, _react2.default.createElement(_semanticUiReact.Loader, { size: 'huge', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 92
                }
            }, 'Fetching campaign from blockchain')), _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            }, '\xA0Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 96
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', floated: 'right', basic: true, loading: this.state.loading, onClick: function onClick() {
                    _this3.setState({ loading: true });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 97
                }
            }, 'Create Campaign +'))), this.renderCampaigns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns, numCampaigns, campaignDetails;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                numCampaigns = campaigns.length;
                                _context.next = 6;
                                return _promise2.default.all(Array(parseInt(numCampaigns)).fill().map(function (element, index) {
                                    var campaign = (0, _campaign2.default)(campaigns[index]);
                                    return campaign.methods.showCampaignStrings().call();
                                }));

                            case 6:
                                campaignDetails = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns, campaignDetails: campaignDetails });

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiaW5zdGFuY2UiLCJDYXJkIiwiSWNvbiIsIkltYWdlIiwiQnV0dG9uIiwiRGltbWVyIiwiTG9hZGVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwibG9hZGluZyIsImNhcmRzTG9hZGluZyIsImxvYWRlciIsImNhbXBhaWduTG9hZGVyIiwic2V0U3RhdGUiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25EZXRhaWxzIiwibWFwIiwic3RyaW5ncyIsImluZGV4IiwiY2FtcGFpZ25zIiwiZmxvYXQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwibnVtQ2FtcGFpZ25zIiwibGVuZ3RoIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiY2FtcGFpZ24iLCJzaG93Q2FtcGFpZ25TdHJpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUTs7OztBQUNmLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQU0sQUFBSyxBQUFNLEFBQU8sQUFBTzs7QUFDeEMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFjOzs7Ozs7Ozs7SSxBQUtmOzs7Ozs7Ozs7Ozs7Ozs4TixBQUVGO3FCQUFNLEFBQ00sQUFDUjswQkFGRSxBQUVXLEFBQ2I7b0JBSEUsQUFHSyxBQUNQOzRCLEFBSkUsQUFJYTtBQUpiLEFBQ0Y7Ozs7OzRDQU1lLEFBQ2Y7aUJBQUEsQUFBSyxTQUFTLEVBQUMsUUFBZixBQUFjLEFBQVEsQUFDekI7Ozs7MENBa0JnQjt5QkFDYjs7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxnQkFBWCxBQUEyQixJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVMs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QWRULEFBQ0EsQUFDSSxBQVlLLEFBQUssQUFJakI7Ozs7Ozs7Ozs7Ozt1Q0E1RTJCLGtCQUFBLEFBQVMsUUFBVCxBQUFpQix1QixBQUFqQixBQUF3Qzs7aUNBQTFEO0EscURBQ0E7QSwrQ0FBZSxVLEFBQVU7O3lEQUNELEFBQVEsVUFDNUIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUNLLE9BREwsQUFFSyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN6Qjt3Q0FBTSxXQUFVLHdCQUFTLFVBQXpCLEFBQWdCLEFBQVMsQUFBVSxBQUNuQzsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixzQkFBeEIsQUFBTyxBQUF1QyxBQUM3QztBLEFBTnFCLEFBQzFCLGlDQUFBLENBRDBCOztpQ0FBeEI7QTtpRUFRRSxFQUFDLFdBQUQsV0FBVyxpQixBQUFYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EsQUExQlksQUFnRzVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FscGhhL2tvZGUvZnVuZGluZ0Jsb2NrIn0=