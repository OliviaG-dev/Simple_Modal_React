"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("./modal.css");
var _react = _interopRequireDefault(require("react"));
var Modal = function Modal(_ref) {
  var text = _ref.text,
    closeModal = _ref.closeModal;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__container"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modal__header__button",
    onClick: closeModal
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal__text"
  }, /*#__PURE__*/_react.default.createElement("h2", null, text))));
};
var _default = Modal;
exports.default = _default;