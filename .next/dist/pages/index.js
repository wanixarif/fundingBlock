"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _factory = require("../ethereuem/factory");

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require("semantic-ui-react");

var _Layout = require("../componenets/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = require("../routes");

var _campaign = require("../ethereuem/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/alpha/kode/fundingBlock/pages/index.js?entry";


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
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({ loader: false });
    }
  }, {
    key: "renderCampaigns",
    value: function renderCampaigns() {
      var _this2 = this;

      var items = this.props.campaignDetails.map(function (strings, index) {
        return _react2.default.createElement(_semanticUiReact.Card, { fluid: true, onClick: function onClick() {
            return _this2.setState({ campaignLoader: true });
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + _this2.props.campaigns[index], __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, _react2.default.createElement(_semanticUiReact.Card, { fluid: true, color: "red", __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Content, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }, _react2.default.createElement(_semanticUiReact.Card.Header, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        }, strings[0]), _react2.default.createElement(_semanticUiReact.Card.Description, { floated: "left", __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          }
        }, _react2.default.createElement(_semanticUiReact.Image, { floated: "right", size: "small", src: strings[4], __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          }
        }), strings[1])), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          }
        }, _react2.default.createElement("div", { className: "ui two", __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        }, strings[2], " | Created by: ", strings[5], _react2.default.createElement(_routes.Link, { route: "/campaigns/" + _this2.props.campaigns[index], __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          }
        }, _react2.default.createElement("a", { style: { float: "right" }, __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        }, _react2.default.createElement(_semanticUiReact.Icon, { name: "chevron circle right", __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }), "View Campaign")))))));
      });

      return _react2.default.createElement(_semanticUiReact.Card.Group, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, items);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.loader, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, { size: "huge", __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      })), _react2.default.createElement(_semanticUiReact.Dimmer, { active: this.state.campaignLoader, page: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, _react2.default.createElement(_semanticUiReact.Loader, { size: "huge", __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, "Fetching campaign from blockchain")), _react2.default.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, "\xA0Open Campaigns"), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, {
        color: "green",
        floated: "right",
        basic: true,
        loading: this.state.loading,
        onClick: function onClick() {
          _this3.setState({ loading: true });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, "Create Campaign +"))), this.renderCampaigns()));
    }
  }], [{
    key: "getInitialProps",
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
                return _context.abrupt("return", { campaigns: campaigns, campaignDetails: campaignDetails });

              case 8:
              case "end":
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiaW5zdGFuY2UiLCJDYXJkIiwiSWNvbiIsIkltYWdlIiwiQnV0dG9uIiwiRGltbWVyIiwiTG9hZGVyIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduIiwiQ2FtcGFpZ25JbmRleCIsInN0YXRlIiwibG9hZGluZyIsImNhcmRzTG9hZGluZyIsImxvYWRlciIsImNhbXBhaWduTG9hZGVyIiwic2V0U3RhdGUiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25EZXRhaWxzIiwibWFwIiwic3RyaW5ncyIsImluZGV4IiwiY2FtcGFpZ25zIiwiZmxvYXQiLCJyZW5kZXJDYW1wYWlnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIiwibnVtQ2FtcGFpZ25zIiwibGVuZ3RoIiwiYWxsIiwiQXJyYXkiLCJwYXJzZUludCIsImZpbGwiLCJlbGVtZW50IiwiY2FtcGFpZ24iLCJzaG93Q2FtcGFpZ25TdHJpbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNLEFBQU0sQUFBTyxBQUFRLEFBQVE7O0FBQzVDLEFBQU8sQUFBWTs7OztBQUNuQixBQUFTLEFBQVk7O0FBQ3JCLEFBQU8sQUFBYzs7Ozs7Ozs7O0ksQUFFZjs7Ozs7Ozs7Ozs7Ozs7ME4sQUFDSjtlQUFRLEFBQ0csQUFDVDtvQkFGTSxBQUVRLEFBQ2Q7Y0FITSxBQUdFLEFBQ1I7c0IsQUFKTSxBQUlVO0FBSlYsQUFDTjs7Ozs7d0NBTWtCLEFBQ2xCO1dBQUEsQUFBSyxTQUFTLEVBQUUsUUFBaEIsQUFBYyxBQUFVLEFBQ3pCOzs7O3NDQWdCaUI7bUJBQ2hCOztVQUFNLGFBQVEsQUFBSyxNQUFMLEFBQVcsZ0JBQVgsQUFBMkIsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFV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QkExQlAsQUFDRSxBQUNFLEFBd0JHLEFBQUssQUFJYjs7Ozs7Ozs7Ozs7O3VCQTlFeUIsa0JBQUEsQUFBUyxRQUFULEFBQWlCLHVCLEFBQWpCLEFBQXdDOzttQkFBMUQ7QSxxQ0FDQTtBLCtCQUFlLFUsQUFBVTs7eUNBQ0QsQUFBUSxVQUM5QixTQUFOLEFBQU0sQUFBUyxlQUFmLEFBQ0csT0FESCxBQUVHLElBQUksVUFBQSxBQUFDLFNBQUQsQUFBVSxPQUFVLEFBQ3ZCO3NCQUFNLFdBQVcsd0JBQVMsVUFBMUIsQUFBaUIsQUFBUyxBQUFVLEFBQ3BDO3lCQUFPLFNBQUEsQUFBUyxRQUFULEFBQWlCLHNCQUF4QixBQUFPLEFBQXVDLEFBQy9DO0EsQUFOeUIsQUFDNUIsaUJBQUEsQ0FENEI7O21CQUF4QjtBO2lEQVFDLEVBQUUsV0FBRixXQUFhLGlCLEFBQWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQXZCaUIsQUE4RjVCOztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9ob21lL2FscGhhL2tvZGUvZnVuZGluZ0Jsb2NrIn0=