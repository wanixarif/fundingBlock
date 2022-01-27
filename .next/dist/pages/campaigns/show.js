"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Layout = require("../../componenets/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _semanticUiReact = require("semantic-ui-react");

var _routes = require("../../routes");

var _campaign = require("../../ethereuem/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../ethereuem/web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/alpha/kode/fundingBlock/pages/campaigns/show.js?entry";


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
      contributionAmount: "",
      message: "",
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
                _this.setState({ message: "" });
                _this.setState({ loading: true });

                _context.prev = 3;
                _context.next = 6;
                return _web2.default.eth.getAccounts();

              case 6:
                accounts = _context.sent;
                _context.next = 9;
                return (0, _campaign2.default)(_this.props.contractAddress).methods.contribute().send({
                  from: accounts[0],
                  value: _web2.default.utils.toWei(_this.state.contributionAmount, "ether")
                });

              case 9:
                _routes.Router.replaceRoute("/campaigns/" + _this.props.contractAddress);
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

                _this.setState({ message: _context.t0["message"] });

              case 15:

                _this.setState({ loading: false });

              case 16:
              case "end":
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
    key: "renderCard",
    value: function renderCard() {
      var items = [{
        header: "Address of this campaign",
        description: this.props.contractAddress,
        meta: "Campaign Address",
        style: { overflowWrap: "break-word" }
      }, {
        header: "Address of the creator of this campaign",
        description: this.props.manager,
        meta: "Manager",
        style: { overflowWrap: "break-word" }
      }, {
        header: _web2.default.utils.fromWei(this.props.balance, "ether"),
        description: "Funds available right now",
        meta: "Campaign balance"
      }, {
        header: _web2.default.utils.fromWei(this.props.amountSpent, "ether"),
        description: "Total amount withdrawn so far",
        meta: "Funds spent"
      }, {
        header: _web2.default.utils.fromWei(this.props.amountRaised, "ether"),
        description: "Total amount raised so far",
        meta: "Funds raised"
      }, {
        header: this.props.contributorCount,
        description: "Number of people who contributed to this campaign",
        meta: "Contributors"
      }, {
        header: this.props.requestsCount - this.props.finalizedRequestsCount,
        description: "Withdrawal requests yet to be finalized",
        meta: "Active requests"
      }, {
        header: this.props.finalizedRequestsCount,
        description: "Withdrawal requests finalized so far",
        meta: "Finalized requests"
      }];
      return items;
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement(_semanticUiReact.Grid, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: "red", __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, this.props.campaignTitle), _react2.default.createElement(_semanticUiReact.Card.Description, { floated: "left", __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement(_semanticUiReact.Image, {
        floated: "right",
        size: "small",
        src: this.props.campaignImageURL,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), this.props.campaignDescription)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement("div", { className: "ui two", __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, this.props.category, " | Created by:", " ", this.props.campaignCreatorName, _react2.default.createElement("a", {
        style: { float: "right" },
        href: this.props.website,
        target: "_blank",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement(_semanticUiReact.Icon, { name: "globe", __source: {
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
          lineNumber: 164
        }
      }, _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.message, __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement(_semanticUiReact.Form.Field, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, "Contribute to this campaign:"), _react2.default.createElement(_semanticUiReact.Input, {
        type: "number",
        step: "any",
        label: "ETH",
        labelPosition: "right",
        value: this.state.contributionAmount,
        onChange: function onChange(event) {
          return _this3.setState({ contributionAmount: event.target.value });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.message, __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        }
      }), _react2.default.createElement("div", { className: "ui two", __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        loading: this.state.loading,
        type: "submit",
        basic: true,
        color: "green",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, "Contribute"), _react2.default.createElement("span", { style: { float: "right" }, __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        }
      }, "Minimum:", " ", _web2.default.utils.fromWei(this.props.minimumContribution, "ether")))))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        }
      }, _react2.default.createElement(_routes.Link, {
        route: "/campaigns/" + this.props.contractAddress + "/requests",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        basic: true,
        color: "green",
        loading: this.state.requestsLoading,
        onClick: function onClick(event) {
          _this3.setState({ requestsLoading: true });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208
        }
      }, "View Requests")))))));
    }
  }], [{
    key: "getInitialProps",
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
                return _context2.abrupt("return", {
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
              case "end":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsIkNhcmQiLCJHcmlkIiwiSW1hZ2UiLCJJY29uIiwiUm91dGVyIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInN0YXRlIiwiY29udHJpYnV0aW9uQW1vdW50IiwibWVzc2FnZSIsImxvYWRpbmciLCJyZXF1ZXN0c0xvYWRpbmciLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJwcm9wcyIsImNvbnRyYWN0QWRkcmVzcyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ2YWx1ZSIsInV0aWxzIiwidG9XZWkiLCJyZXBsYWNlUm91dGUiLCJpdGVtcyIsImhlYWRlciIsImRlc2NyaXB0aW9uIiwibWV0YSIsInN0eWxlIiwib3ZlcmZsb3dXcmFwIiwibWFuYWdlciIsImZyb21XZWkiLCJiYWxhbmNlIiwiYW1vdW50U3BlbnQiLCJhbW91bnRSYWlzZWQiLCJjb250cmlidXRvckNvdW50IiwicmVxdWVzdHNDb3VudCIsImZpbmFsaXplZFJlcXVlc3RzQ291bnQiLCJjYW1wYWlnblRpdGxlIiwiY2FtcGFpZ25JbWFnZVVSTCIsImNhbXBhaWduRGVzY3JpcHRpb24iLCJjYXRlZ29yeSIsImNhbXBhaWduQ3JlYXRvck5hbWUiLCJmbG9hdCIsIndlYnNpdGUiLCJyZW5kZXJDYXJkIiwidGFyZ2V0IiwibWluaW11bUNvbnRyaWJ1dGlvbiIsInF1ZXJ5IiwiYWRkcmVzcyIsImNhbXBhaWduIiwic2hvd0NhbXBhaWduRGV0YWlscyIsImNhbGwiLCJzdW1tYXJ5Iiwic2hvd0NhbXBhaWduU3RyaW5ncyIsInN0cmluZ1N1bW1hcnkiLCJnZXRGaW5hbGl6ZWRSZXF1ZXN0c0NvdW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQU8sQUFBWTs7OztBQUNuQixBQUNFLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7O0FBRUYsQUFBUyxBQUFjOztBQUN2QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVLEFBQ2pCLEFBQVMsQUFBWTs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7O3dOLEFBK0JKOzBCQUFRLEFBQ2MsQUFDcEI7ZUFGTSxBQUVHLEFBQ1Q7ZUFITSxBQUdHLEFBQ1Q7dUIsQUFKTSxBQUlXO0FBSlgsQUFDTixhLEFBTUY7MkZBQVcsaUJBQUEsQUFBTyxPQUFQO1lBQUE7c0VBQUE7b0JBQUE7NkNBQUE7bUJBQ1Q7c0JBQUEsQUFBTSxBQUNOO3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQWhCLEFBQWMsQUFBVyxBQUN6QjtzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQUhQLEFBR1QsQUFBYyxBQUFXOztnQ0FIaEI7Z0NBQUE7dUJBTWdCLGNBQUEsQUFBSyxJQU5yQixBQU1nQixBQUFTOzttQkFBMUI7QUFOQyxvQ0FBQTtnQ0FBQTsrQ0FPUSxNQUFBLEFBQUssTUFBZCxBQUFvQixpQkFBcEIsQUFDSCxRQURHLEFBQ0ssYUFETCxBQUVIO3dCQUNPLFNBREYsQUFDRSxBQUFTLEFBQ2Y7eUJBQU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLE1BQUEsQUFBSyxNQUF0QixBQUE0QixvQkFYaEMsQUFPRCxBQUVFLEFBRUcsQUFBZ0Q7QUFGbkQsQUFDSixpQkFIRTs7bUJBTU47K0JBQUEsQUFBTyxhQUFhLGdCQUFnQixNQUFBLEFBQUssTUFibEMsQUFhUCxBQUErQztnQ0FieEM7QUFBQTs7bUJBQUE7Z0NBQUE7Z0RBZVA7O3NCQUFBLEFBQUssU0FBUyxFQUFFLFNBQVMsWUFmbEIsQUFlUCxBQUFjLEFBQVcsQUFBTTs7bUJBR2pDOztzQkFBQSxBQUFLLFNBQVMsRUFBRSxTQWxCUCxBQWtCVCxBQUFjLEFBQVc7O21CQWxCaEI7bUJBQUE7Z0NBQUE7O0FBQUE7aUNBQUE7QTs7Ozs7Ozs7OztpQ0FxQkUsQUFDWDtVQUFNO2dCQUNKLEFBQ1UsQUFDUjtxQkFBYSxLQUFBLEFBQUssTUFGcEIsQUFFMEIsQUFDeEI7Y0FIRixBQUdRLEFBQ047ZUFBTyxFQUFFLGNBTEMsQUFDWixBQUlTLEFBQWdCO0FBSnpCLEFBQ0UsT0FGVTtnQkFPWixBQUNVLEFBQ1I7cUJBQWEsS0FBQSxBQUFLLE1BRnBCLEFBRTBCLEFBQ3hCO2NBSEYsQUFHUSxBQUNOO2VBQU8sRUFBRSxjQVhDLEFBT1osQUFJUyxBQUFnQjtBQUp6QixBQUNFO2dCQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsU0FEeEMsQUFDVSxBQUF1QyxBQUMvQztxQkFGRixBQUVlLEFBQ2I7Y0FoQlUsQUFhWixBQUdRO0FBSFIsQUFDRTtnQkFLUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVEsS0FBQSxBQUFLLE1BQXhCLEFBQThCLGFBRHhDLEFBQ1UsQUFBMkMsQUFDbkQ7cUJBRkYsQUFFZSxBQUNiO2NBckJVLEFBa0JaLEFBR1E7QUFIUixBQUNFO2dCQUtRLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBUSxLQUFBLEFBQUssTUFBeEIsQUFBOEIsY0FEeEMsQUFDVSxBQUE0QyxBQUNwRDtxQkFGRixBQUVlLEFBQ2I7Y0ExQlUsQUF1QlosQUFHUTtBQUhSLEFBQ0U7Z0JBS1EsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7cUJBRkYsQUFFZSxBQUNiO2NBL0JVLEFBNEJaLEFBR1E7QUFIUixBQUNFO2dCQUtRLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQWdCLEtBQUEsQUFBSyxNQUQxQyxBQUNnRCxBQUM5QztxQkFGRixBQUVlLEFBQ2I7Y0FwQ1UsQUFpQ1osQUFHUTtBQUhSLEFBQ0U7Z0JBS1EsS0FBQSxBQUFLLE1BRGYsQUFDcUIsQUFDbkI7cUJBRkYsQUFFZSxBQUNiO2NBekNKLEFBQWMsQUFzQ1osQUFHUSxBQUdWO0FBTkUsQUFDRTthQUtKLEFBQU8sQUFDUjs7Ozs2QkFFUTttQkFDUDs7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQyx1Q0FBSyxPQUFOLE1BQVksT0FBWixBQUFrQjtvQkFBbEI7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUFjO0FBQWQ7QUFBQSxjQUFjLEFBQUssTUFEckIsQUFDRSxBQUF5QixBQUN6QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sZUFBWSxTQUFsQixBQUEwQjtvQkFBMUI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUM7aUJBQUQsQUFDVSxBQUNSO2NBRkYsQUFFTyxBQUNMO2FBQUssS0FBQSxBQUFLLE1BSFosQUFHa0I7O29CQUhsQjtzQkFERixBQUNFLEFBS0M7QUFMRDtBQUNFLGVBSUQsQUFBSyxNQVRaLEFBQ0UsQUFFRSxBQU1jLEFBR2hCLHVDQUFDLGNBQUQsc0JBQUEsQUFBTSxXQUFRLE9BQWQ7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWU7b0JBQWY7c0JBQUEsQUFDRztBQURIO2NBQ0csQUFBSyxNQURSLEFBQ2MsVUFBd0Isa0JBRHRDLEFBRUcsVUFBQSxBQUFLLE1BRlIsQUFFYyxBQUNaLHFDQUFBLGNBQUE7ZUFDUyxFQUFFLE9BRFgsQUFDUyxBQUFTLEFBQ2hCO2NBQU0sS0FBQSxBQUFLLE1BRmIsQUFFbUIsQUFDakI7Z0JBSEYsQUFHUzs7b0JBSFQ7c0JBQUEsQUFLRTtBQUxGO0FBQ0UseUJBSUEsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7b0JBQVg7c0JBTEYsQUFLRSxBQUNDO0FBREQ7ZUFDQyxBQUFLLE1BekJwQixBQUNFLEFBQ0UsQUFDRSxBQVlFLEFBQ0UsQUFHRSxBQU1jLEFBT3hCLCtCQUFDLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3VDQUNFLEFBQUMsc0JBQUQsQUFBTSxTQUFNLGFBQVosQUFBeUIsR0FBRyxPQUFPLEtBQW5DLEFBQW1DLEFBQUs7b0JBQXhDO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUQsY0FBRCxzQkFBQSxBQUFNLFVBQU8sT0FBYixBQUFvQjtvQkFBcEI7c0JBQUEsQUFDRTtBQURGO3lCQUNFLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDtvQkFBbkQ7c0JBQUEsQUFDRTtBQURGO3lCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBREYsQUFDRSxBQUNBLGlEQUFBLEFBQUM7Y0FBRCxBQUNPLEFBQ0w7Y0FGRixBQUVPLEFBQ0w7ZUFIRixBQUdRLEFBQ047dUJBSkYsQUFJZ0IsQUFDZDtlQUFPLEtBQUEsQUFBSyxNQUxkLEFBS29CLEFBQ2xCO2tCQUFVLGtCQUFBLEFBQUMsT0FBRDtpQkFDUixPQUFBLEFBQUssU0FBUyxFQUFFLG9CQUFvQixNQUFBLEFBQU0sT0FEbEMsQUFDUixBQUFjLEFBQW1DO0FBUHJEOztvQkFBQTtzQkFISixBQUNFLEFBRUUsQUFXRjtBQVhFO0FBQ0UsMkJBVUosQUFBQywwQ0FBUSxPQUFULE1BQWUsUUFBZixBQUFzQixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTVDLEFBQWtEO29CQUFsRDtzQkFkRixBQWNFLEFBRUE7QUFGQTswQkFFQSxjQUFBLFNBQUssV0FBTCxBQUFlO29CQUFmO3NCQUFBLEFBQ0U7QUFERjt5QkFDRSxBQUFDO2lCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNwQjtjQUZGLEFBRU8sQUFDTDtlQUhGLEFBSUU7ZUFKRixBQUlROztvQkFKUjtzQkFBQTtBQUFBO0FBQ0UsU0FGSixBQUNFLEFBUUEsK0JBQUEsY0FBQSxVQUFNLE9BQU8sRUFBRSxPQUFmLEFBQWEsQUFBUztvQkFBdEI7c0JBQUE7QUFBQTtTQUNXLFlBRFgsQUFFRyxtQkFBQSxBQUFLLE1BQUwsQUFBVyxRQUNWLEtBQUEsQUFBSyxNQUROLEFBQ1kscUJBakV6QixBQWdDRSxBQUlFLEFBQ0UsQUFnQkUsQUFTRSxBQUVHLEFBRUMsQUFRWiwrQkFBQyxjQUFELHNCQUFBLEFBQU07O29CQUFOO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNHLGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztlQUNRLGdCQUFnQixLQUFBLEFBQUssTUFBckIsQUFBMkIsa0JBRHBDLEFBQ3NEOztvQkFEdEQ7c0JBQUEsQUFHRTtBQUhGO0FBQ0UseUJBRUEsY0FBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsQUFBQztlQUFELEFBRUU7ZUFGRixBQUVRLEFBQ047aUJBQVMsS0FBQSxBQUFLLE1BSGhCLEFBR3NCLEFBQ3BCO2lCQUFTLGlCQUFBLEFBQUMsT0FBVSxBQUNsQjtpQkFBQSxBQUFLLFNBQVMsRUFBRSxpQkFBaEIsQUFBYyxBQUFtQixBQUNsQztBQU5IOztvQkFBQTtzQkFBQTtBQUFBO0FBQ0UsU0FuRmhCLEFBQ0UsQUFDRSxBQTBFRSxBQUNFLEFBQ0UsQUFHRSxBQUNFLEFBaUJmOzs7Ozs2RyxBQTlNNEI7Ozs7O21CQUNyQjtBLGtDQUFrQixNQUFBLEFBQU0sTSxBQUFNOzt1QkFDYix3QixBQUFBLEFBQVM7O21CQUExQjtBOzt1QkFDZ0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsc0IsQUFBakIsQUFBdUM7O21CQUF2RDtBOzt1QkFDc0IsU0FBQSxBQUFTLFFBQVQsQUFBaUIsc0IsQUFBakIsQUFBdUM7O21CQUE3RDtBOzt1QkFDK0IsU0FBQSxBQUFTLFFBQVQsQUFDbEMsNEIsQUFEa0MsQUFFbEM7O21CQUZHO0E7O3VCQUdvQixTQUFBLEFBQVMsUUFBVCxBQUFpQixjLEFBQWpCLEFBQStCOzttQkFBbkQ7QTs7dUJBQ3FCLFNBQUEsQUFBUyxRQUFULEFBQWlCLGUsQUFBakIsQUFBZ0M7O21CQUFyRDtBOzttQ0FFQyxBQUNZLEFBQ2pCO3VDQUFxQixRQUZoQixBQUVnQixBQUFRLEFBQzdCOzJCQUFTLFFBSEosQUFHSSxBQUFRLEFBQ2pCO2lDQUFlLFFBSlYsQUFJVSxBQUFRLEFBQ3ZCO29DQUFrQixRQUxiLEFBS2EsQUFBUSxBQUMxQjsyQkFBUyxRQU5KLEFBTUksQUFBUSxBQUNqQjtpQ0FBZSxjQVBWLEFBT1UsQUFBYyxBQUM3Qjt1Q0FBcUIsY0FSaEIsQUFRZ0IsQUFBYyxBQUNuQzs0QkFBVSxjQVRMLEFBU0ssQUFBYyxBQUN4QjsyQkFBUyxjQVZKLEFBVUksQUFBYyxBQUN2QjtvQ0FBa0IsY0FYYixBQVdhLEFBQWMsQUFDaEM7dUNBQXFCLGNBWmhCLEFBWWdCLEFBQWMsQUFDbkM7MENBYkssQUFhbUIsQUFDeEI7K0JBZEssQUFjUSxBQUNiO2dDLEFBZkssQUFlUztBQWZULEFBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQWJxQixBQWtOM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hbHBoYS9rb2RlL2Z1bmRpbmdCbG9jayJ9