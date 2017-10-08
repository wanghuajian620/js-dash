'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '个人绝密档案'
    }, _this.data = {
      text: '......',
      size: 'default',
      loading: false,
      plain: true,
      count: 0,
      items: [{ name: 'USA', value: '美国' }, { name: 'CHN', value: '中国', checked: 'true' }, { name: 'BRA', value: '巴西' }, { name: 'JPN', value: '日本' }, { name: 'ENG', value: '英国' }, { name: 'TUR', value: '法国' }],
      focus: false,
      inputValue: ''
    }, _this.methods = {
      add: function add() {
        var self = this;
        self.count++;
      },
      bindButtonTap: function bindButtonTap() {
        var self = this;
        self.focus = true;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onload',
    value: function onload() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImRhdGEiLCJ0ZXh0Iiwic2l6ZSIsImxvYWRpbmciLCJwbGFpbiIsImNvdW50IiwiaXRlbXMiLCJuYW1lIiwidmFsdWUiLCJjaGVja2VkIiwiZm9jdXMiLCJpbnB1dFZhbHVlIiwibWV0aG9kcyIsImFkZCIsInNlbGYiLCJiaW5kQnV0dG9uVGFwIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFJVEMsSSxHQUFPO0FBQ0xDLFlBQU0sUUFERDtBQUVMQyxZQUFNLFNBRkQ7QUFHTEMsZUFBUyxLQUhKO0FBSUxDLGFBQU8sSUFKRjtBQUtMQyxhQUFPLENBTEY7QUFNTEMsYUFBTyxDQUNQLEVBQUNDLE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBRE8sRUFFUCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUEyQkMsU0FBUyxNQUFwQyxFQUZPLEVBR1AsRUFBQ0YsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFITyxFQUlQLEVBQUNELE1BQU0sS0FBUCxFQUFjQyxPQUFPLElBQXJCLEVBSk8sRUFLUCxFQUFDRCxNQUFNLEtBQVAsRUFBY0MsT0FBTyxJQUFyQixFQUxPLEVBTVAsRUFBQ0QsTUFBTSxLQUFQLEVBQWNDLE9BQU8sSUFBckIsRUFOTyxDQU5GO0FBY0xFLGFBQU8sS0FkRjtBQWVMQyxrQkFBWTtBQWZQLEssUUFpQlBDLE8sR0FBVTtBQUNSQyxTQURRLGlCQUNGO0FBQ0osWUFBSUMsT0FBTyxJQUFYO0FBQ0FBLGFBQUtULEtBQUw7QUFDRCxPQUpPO0FBS1JVLG1CQUxRLDJCQUtRO0FBQ2QsWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtKLEtBQUwsR0FBYSxJQUFiO0FBQ0Q7QUFSTyxLOzs7Ozs2QkFVRCxDQUFFOzs7O0VBaENzQixlQUFLTSxJOztrQkFBbkJuQixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfkuKrkurrnu53lr4bmoaPmoYgnXG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHRleHQ6ICcuLi4uLi4nLFxuICAgICAgc2l6ZTogJ2RlZmF1bHQnLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBwbGFpbjogdHJ1ZSxcbiAgICAgIGNvdW50OiAwLFxuICAgICAgaXRlbXM6IFtcbiAgICAgIHtuYW1lOiAnVVNBJywgdmFsdWU6ICfnvo7lm70nfSxcbiAgICAgIHtuYW1lOiAnQ0hOJywgdmFsdWU6ICfkuK3lm70nLCBjaGVja2VkOiAndHJ1ZSd9LFxuICAgICAge25hbWU6ICdCUkEnLCB2YWx1ZTogJ+W3tOilvyd9LFxuICAgICAge25hbWU6ICdKUE4nLCB2YWx1ZTogJ+aXpeacrCd9LFxuICAgICAge25hbWU6ICdFTkcnLCB2YWx1ZTogJ+iLseWbvSd9LFxuICAgICAge25hbWU6ICdUVVInLCB2YWx1ZTogJ+azleWbvSd9XG4gICAgICBdLFxuICAgICAgZm9jdXM6IGZhbHNlLFxuICAgICAgaW5wdXRWYWx1ZTogJydcbiAgICB9XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIGFkZCgpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICAgIHNlbGYuY291bnQrK1xuICAgICAgfSxcbiAgICAgIGJpbmRCdXR0b25UYXAoKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgICBzZWxmLmZvY3VzID0gdHJ1ZVxuICAgICAgfVxuICAgIH1cbiAgICBvbmxvYWQoKSB7fVxuICB9XG4iXX0=