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

var _factory = require('../../ethereuem/factory');

var _factory2 = _interopRequireDefault(_factory);

var _web = require('../../ethereuem/web3');

var _web2 = _interopRequireDefault(_web);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/alpha/kode/fundingBlock/pages/campaigns/new.js?entry';


var options = [{ text: 'Arts', value: 'Arts' }, { text: 'Comics & Illustration', value: 'Comics & Illustration' }, { text: 'Design & Tech', value: 'Design & Tech' }, { text: 'Film', value: 'Film' }, { text: 'Food & Craft', value: 'Food & Craft' }, { text: 'Games', value: 'Games' }, { text: 'Music', value: 'Music' }, { text: 'Publishing', value: 'Publishing' }];

var CampaignNew = function (_Component) {
    (0, _inherits3.default)(CampaignNew, _Component);

    function CampaignNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, CampaignNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = CampaignNew.__proto__ || (0, _getPrototypeOf2.default)(CampaignNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            minimumContribution: '',
            Title: '',
            Description: '',
            Category: '',
            Website: '',
            ImageURL: '',
            CreatorName: '',
            message: '',
            loading: false
        }, _this.handleChange = function (e, _ref2) {
            var value = _ref2.value;
            return _this.setState({ Category: value });
        }, _this.onSubmit = function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
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
                                return _factory2.default.methods.createCampaign(_web2.default.utils.toWei(_this.state.minimumContribution, 'ether'), _this.state.Title, _this.state.Description, _this.state.Category, _this.state.Website, _this.state.ImageURL, _this.state.CreatorName).send({
                                    from: accounts[0] });

                            case 9:

                                _routes.Router.pushRoute('/');

                                _context.next = 15;
                                break;

                            case 12:
                                _context.prev = 12;
                                _context.t0 = _context['catch'](3);

                                _this.setState({ message: 'Transaction failed: ' + _context.t0['message'] });

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
                return _ref3.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(CampaignNew, [{
        key: 'render',
        value: function render() {
            var _this3 = this;

            console.log(this.state.Category);
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, 'Start a new campaign'), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.message, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 8, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Title:'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.Title,
                onChange: function onChange(event) {
                    return _this3.setState({ Title: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 8, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Minimum donation amount:'), _react2.default.createElement(_semanticUiReact.Input, {
                type: 'number',
                step: 'any',
                label: 'ETH',
                labelPosition: 'right',
                value: this.state.minimumContribution,
                onChange: function onChange(event) {
                    return _this3.setState({ minimumContribution: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 82
                }
            }))), _react2.default.createElement(_semanticUiReact.Form.Field, { required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 94
                }
            }, 'Description:'), _react2.default.createElement(_semanticUiReact.TextArea, {
                value: this.state.Description,
                onChange: function onChange(event) {
                    return _this3.setState({ Description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 95
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 100
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                width: '8',
                onChange: this.handleChange,
                value: this.state.Category,
                control: _semanticUiReact.Select,
                label: 'Category',
                options: options,
                placeholder: 'Select one',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 102
                }
            }), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 8, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 111
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 112
                }
            }, 'Website:'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.Website,
                onChange: function onChange(event) {
                    return _this3.setState({ Website: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 113
                }
            }))), _react2.default.createElement(_semanticUiReact.Form.Group, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 119
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, { width: 8, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 121
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 122
                }
            }, 'Project thumbnail URL:'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.ImageURL,
                onChange: function onChange(event) {
                    return _this3.setState({ ImageURL: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 123
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, { width: 8, required: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 128
                }
            }, _react2.default.createElement('label', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 129
                }
            }, 'Your full name:'), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.CreatorName,
                onChange: function onChange(event) {
                    return _this3.setState({ CreatorName: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 130
                }
            }))), _react2.default.createElement(_semanticUiReact.Message, {
                error: true,
                header: 'Oops!',
                content: this.state.message,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 136
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, type: 'submit', color: 'green', fluid: true, basic: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 143
                }
            }, 'Create')));
        }
    }]);

    return CampaignNew;
}(_react.Component);

exports.default = CampaignNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJMYXlvdXQiLCJCdXR0b24iLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiVGV4dEFyZWEiLCJTZWxlY3QiLCJpbnN0YW5jZSIsIndlYjMiLCJSb3V0ZXIiLCJvcHRpb25zIiwidGV4dCIsInZhbHVlIiwiQ2FtcGFpZ25OZXciLCJzdGF0ZSIsIm1pbmltdW1Db250cmlidXRpb24iLCJUaXRsZSIsIkRlc2NyaXB0aW9uIiwiQ2F0ZWdvcnkiLCJXZWJzaXRlIiwiSW1hZ2VVUkwiLCJDcmVhdG9yTmFtZSIsIm1lc3NhZ2UiLCJsb2FkaW5nIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInNldFN0YXRlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjcmVhdGVDYW1wYWlnbiIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVE7Ozs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFPLEFBQU0sQUFBTyxBQUFTLEFBQVU7O0FBQ2hELEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQVU7Ozs7QUFDakIsQUFBUSxBQUFhOzs7Ozs7O0FBRXJCLElBQU0sVUFBVSxDQUNaLEVBQUUsTUFBRixBQUFRLFFBQVEsT0FESixBQUNaLEFBQXVCLFVBQ3ZCLEVBQUUsTUFBRixBQUFRLHlCQUF5QixPQUZyQixBQUVaLEFBQXdDLDJCQUN4QyxFQUFFLE1BQUYsQUFBUSxpQkFBaUIsT0FIYixBQUdaLEFBQWdDLG1CQUNoQyxFQUFFLE1BQUYsQUFBUSxRQUFRLE9BSkosQUFJWixBQUF1QixVQUN2QixFQUFFLE1B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QUFFSSxBQVNBO0FBVEE7QUFDSSxnQ0FRSCxjQUFELHNCQUFBLEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDZCQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsTUFBQSxBQUFNLE9BQXhDLEFBQVMsQUFBYyxBQUF3QjtBQUY3RDs7OEJBQUE7Z0NBM0NaLEFBOEJJLEFBV0ksQUFFSSxBQU1SO0FBTlE7QUFDSSxrQ0FLWCxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBRUk7QUFGSjtBQUFBLCtCQUVLLGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUIsR0FBRyxVQUF0Qjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLDJDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLFVBQVUsTUFBQSxBQUFNLE9BQXpDLEFBQVMsQUFBYyxBQUF5QjtBQUY5RDs7OEJBQUE7Z0NBSlIsQUFFSSxBQUVJLEFBS0o7QUFMSTtBQUNJLGlDQUlQLGNBQUQsc0JBQUEsQUFBTSxTQUFNLE9BQVosQUFBbUIsR0FBRyxVQUF0Qjs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLG9DQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLGtCQUFBLEFBQUMsT0FBRDsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTVDLEFBQVMsQUFBYyxBQUE0QjtBQUZqRTs7OEJBQUE7Z0NBNURaLEFBaURJLEFBU0ksQUFFSSxBQU1SO0FBTlE7QUFDSSxrQ0FLWixBQUFDO3VCQUFELEFBRUk7d0JBRkosQUFFVyxBQUNQO3lCQUFTLEtBQUEsQUFBSyxNQUhsQixBQUd3Qjs7OEJBSHhCO2dDQWxFSixBQWtFSSxBQU9BO0FBUEE7QUFDSSxnQ0FNSixBQUFDLHlDQUFPLFNBQVMsS0FBQSxBQUFLLE1BQXRCLEFBQTRCLFNBQVMsTUFBckMsQUFBMEMsVUFBUyxPQUFuRCxBQUF5RCxTQUFRLE9BQWpFLE1BQXVFLE9BQXZFOzhCQUFBO2dDQUFBO0FBQUE7ZUE1RVosQUFDSSxBQUVJLEFBeUVJLEFBT2Y7Ozs7O0FBR0wsQSxBQXRJMEI7O2tCQXNJMUIsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYWxwaGEva29kZS9mdW5kaW5nQmxvY2sifQ==