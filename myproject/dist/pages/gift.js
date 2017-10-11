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
      navigationBarTitleText: '礼物说'
    }, _this.data = {
      head: '../imgas/人头.png',
      persent: '../imgas/礼物.png',
      right: '../imgas/对勾.png',
      camera: '../imgas/相机.png',
      diamond: '../imgas/钻戒.png',
      watch: '../imgas/手表.png',
      glasses: '../imgas/眼镜.png',
      scarf: '../imgas/围巾.png',
      wallet: '../imgas/钱包.png',
      myself: '自己',
      husband: '老公/男票',
      sister: '兄弟/基友',
      father: '爸爸',
      aunt: '长辈',
      college: '同事',
      color1: 'red',
      color11: 'red',
      color2: 'black',
      color22: 'white'
    }, _this.methods = {
      he: function he() {
        var self = this;
        self.camera = '../imgas/相机-2.png';
        self.diamond = '../imgas/礼物-520专题-钻戒.png';
        self.watch = '../imgas/手表-2.png';
        self.glasses = '../imgas/眼镜-2.png';
        self.scarf = '../imgas/毛衣、针织衫.png';
        self.wallet = '../imgas/美酒.png';
        self.myself = '自己';
        self.husband = '老公/男票';
        self.sister = '兄弟/基友';
        self.father = '爸爸';
        self.aunt = '长辈';
        self.college = '同事';
        self.color1 = 'red';
        self.color11 = 'red';
        self.color2 = 'black';
        self.color22 = 'white';
      },
      she: function she() {
        var self = this;
        self.camera = '../imgas/美妆-2.png';
        self.diamond = '../imgas/礼物-520专题-钻戒.png';
        self.watch = '../imgas/口红.png';
        self.glasses = '../imgas/鲜花.png';
        self.scarf = '../imgas/毛衣、针织衫.png';
        self.wallet = '../imgas/美酒.png';
        self.myself = '自己';
        self.husband = '老婆/女票';
        self.sister = '姐妹/闺蜜';
        self.father = '妈妈';
        self.aunt = '长辈';
        self.college = '同事';
        self.color1 = 'black';
        self.color11 = 'white';
        self.color2 = 'red';
        self.color22 = 'red';
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {}
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/gift'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImhlYWQiLCJwZXJzZW50IiwicmlnaHQiLCJjYW1lcmEiLCJkaWFtb25kIiwid2F0Y2giLCJnbGFzc2VzIiwic2NhcmYiLCJ3YWxsZXQiLCJteXNlbGYiLCJodXNiYW5kIiwic2lzdGVyIiwiZmF0aGVyIiwiYXVudCIsImNvbGxlZ2UiLCJjb2xvcjEiLCJjb2xvcjExIiwiY29sb3IyIiwiY29sb3IyMiIsIm1ldGhvZHMiLCJoZSIsInNlbGYiLCJzaGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRXFCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxJLEdBQU87QUFDTEMsWUFBTSxpQkFERDtBQUVMQyxlQUFTLGlCQUZKO0FBR0xDLGFBQU8saUJBSEY7QUFJTEMsY0FBUSxpQkFKSDtBQUtMQyxlQUFTLGlCQUxKO0FBTUxDLGFBQU8saUJBTkY7QUFPTEMsZUFBUyxpQkFQSjtBQVFMQyxhQUFPLGlCQVJGO0FBU0xDLGNBQVEsaUJBVEg7QUFVTEMsY0FBUSxJQVZIO0FBV0xDLGVBQVMsT0FYSjtBQVlMQyxjQUFRLE9BWkg7QUFhTEMsY0FBUSxJQWJIO0FBY0xDLFlBQU0sSUFkRDtBQWVMQyxlQUFTLElBZko7QUFnQkxDLGNBQVEsS0FoQkg7QUFpQkxDLGVBQVMsS0FqQko7QUFrQkxDLGNBQVEsT0FsQkg7QUFtQkxDLGVBQVM7QUFuQkosSyxRQXFCUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS2xCLE1BQUwsR0FBYyxtQkFBZDtBQUNBa0IsYUFBS2pCLE9BQUwsR0FBZSwwQkFBZjtBQUNBaUIsYUFBS2hCLEtBQUwsR0FBYSxtQkFBYjtBQUNBZ0IsYUFBS2YsT0FBTCxHQUFlLG1CQUFmO0FBQ0FlLGFBQUtkLEtBQUwsR0FBYSxxQkFBYjtBQUNBYyxhQUFLYixNQUFMLEdBQWMsaUJBQWQ7QUFDQWEsYUFBS1osTUFBTCxHQUFjLElBQWQ7QUFDQVksYUFBS1gsT0FBTCxHQUFlLE9BQWY7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLE9BQWQ7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLElBQWQ7QUFDQVMsYUFBS1IsSUFBTCxHQUFZLElBQVo7QUFDQVEsYUFBS1AsT0FBTCxHQUFlLElBQWY7QUFDQU8sYUFBS04sTUFBTCxHQUFjLEtBQWQ7QUFDQU0sYUFBS0wsT0FBTCxHQUFlLEtBQWY7QUFDQUssYUFBS0osTUFBTCxHQUFjLE9BQWQ7QUFDQUksYUFBS0gsT0FBTCxHQUFlLE9BQWY7QUFDRCxPQW5CTztBQW9CUkksU0FwQlEsaUJBb0JGO0FBQ0osWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtsQixNQUFMLEdBQWMsbUJBQWQ7QUFDQWtCLGFBQUtqQixPQUFMLEdBQWUsMEJBQWY7QUFDQWlCLGFBQUtoQixLQUFMLEdBQWEsaUJBQWI7QUFDQWdCLGFBQUtmLE9BQUwsR0FBZSxpQkFBZjtBQUNBZSxhQUFLZCxLQUFMLEdBQWEscUJBQWI7QUFDQWMsYUFBS2IsTUFBTCxHQUFjLGlCQUFkO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxJQUFkO0FBQ0FZLGFBQUtYLE9BQUwsR0FBZSxPQUFmO0FBQ0FXLGFBQUtWLE1BQUwsR0FBYyxPQUFkO0FBQ0FVLGFBQUtULE1BQUwsR0FBYyxJQUFkO0FBQ0FTLGFBQUtSLElBQUwsR0FBWSxJQUFaO0FBQ0FRLGFBQUtQLE9BQUwsR0FBZSxJQUFmO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxPQUFkO0FBQ0FNLGFBQUtMLE9BQUwsR0FBZSxPQUFmO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxLQUFkO0FBQ0FJLGFBQUtILE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUF0Q08sSzs7Ozs7NkJBd0NELENBQUc7Ozs7RUFqRXFCLGVBQUtLLEk7O2tCQUFuQjNCLEsiLCJmaWxlIjoiZ2lmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ekvOeJqeivtCdcbiAgfVxuICBkYXRhID0ge1xuICAgIGhlYWQ6ICcuLi9pbWdhcy/kurrlpLQucG5nJyxcbiAgICBwZXJzZW50OiAnLi4vaW1nYXMv56S854mpLnBuZycsXG4gICAgcmlnaHQ6ICcuLi9pbWdhcy/lr7nli74ucG5nJyxcbiAgICBjYW1lcmE6ICcuLi9pbWdhcy/nm7jmnLoucG5nJyxcbiAgICBkaWFtb25kOiAnLi4vaW1nYXMv6ZK75oiSLnBuZycsXG4gICAgd2F0Y2g6ICcuLi9pbWdhcy/miYvooagucG5nJyxcbiAgICBnbGFzc2VzOiAnLi4vaW1nYXMv55y86ZWcLnBuZycsXG4gICAgc2NhcmY6ICcuLi9pbWdhcy/lm7Tlt74ucG5nJyxcbiAgICB3YWxsZXQ6ICcuLi9pbWdhcy/pkrHljIUucG5nJyxcbiAgICBteXNlbGY6ICfoh6rlt7EnLFxuICAgIGh1c2JhbmQ6ICfogIHlhawv55S356WoJyxcbiAgICBzaXN0ZXI6ICflhYTlvJ8v5Z+65Y+LJyxcbiAgICBmYXRoZXI6ICfniLjniLgnLFxuICAgIGF1bnQ6ICfplb/ovognLFxuICAgIGNvbGxlZ2U6ICflkIzkuosnLFxuICAgIGNvbG9yMTogJ3JlZCcsXG4gICAgY29sb3IxMTogJ3JlZCcsXG4gICAgY29sb3IyOiAnYmxhY2snLFxuICAgIGNvbG9yMjI6ICd3aGl0ZSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGhlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWdhcy/nm7jmnLotMi5wbmcnXG4gICAgICBzZWxmLmRpYW1vbmQgPSAnLi4vaW1nYXMv56S854mpLTUyMOS4k+mimC3pkrvmiJIucG5nJ1xuICAgICAgc2VsZi53YXRjaCA9ICcuLi9pbWdhcy/miYvooagtMi5wbmcnXG4gICAgICBzZWxmLmdsYXNzZXMgPSAnLi4vaW1nYXMv55y86ZWcLTIucG5nJ1xuICAgICAgc2VsZi5zY2FyZiA9ICcuLi9pbWdhcy/mr5vooaPjgIHpkojnu4fooasucG5nJ1xuICAgICAgc2VsZi53YWxsZXQgPSAnLi4vaW1nYXMv576O6YWSLnBuZydcbiAgICAgIHNlbGYubXlzZWxmID0gJ+iHquW3sSdcbiAgICAgIHNlbGYuaHVzYmFuZCA9ICfogIHlhawv55S356WoJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5YWE5byfL+WfuuWPiydcbiAgICAgIHNlbGYuZmF0aGVyID0gJ+eIuOeIuCdcbiAgICAgIHNlbGYuYXVudCA9ICfplb/ovognXG4gICAgICBzZWxmLmNvbGxlZ2UgPSAn5ZCM5LqLJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAncmVkJ1xuICAgICAgc2VsZi5jb2xvcjExID0gJ3JlZCdcbiAgICAgIHNlbGYuY29sb3IyID0gJ2JsYWNrJ1xuICAgICAgc2VsZi5jb2xvcjIyID0gJ3doaXRlJ1xuICAgIH0sXG4gICAgc2hlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmNhbWVyYSA9ICcuLi9pbWdhcy/nvo7lpoYtMi5wbmcnXG4gICAgICBzZWxmLmRpYW1vbmQgPSAnLi4vaW1nYXMv56S854mpLTUyMOS4k+mimC3pkrvmiJIucG5nJ1xuICAgICAgc2VsZi53YXRjaCA9ICcuLi9pbWdhcy/lj6PnuqIucG5nJ1xuICAgICAgc2VsZi5nbGFzc2VzID0gJy4uL2ltZ2FzL+mynOiKsS5wbmcnXG4gICAgICBzZWxmLnNjYXJmID0gJy4uL2ltZ2FzL+avm+iho+OAgemSiOe7h+ihqy5wbmcnXG4gICAgICBzZWxmLndhbGxldCA9ICcuLi9pbWdhcy/nvo7phZIucG5nJ1xuICAgICAgc2VsZi5teXNlbGYgPSAn6Ieq5bexJ1xuICAgICAgc2VsZi5odXNiYW5kID0gJ+iAgeWphi/lpbPnpagnXG4gICAgICBzZWxmLnNpc3RlciA9ICflp5Dlprkv6Ze66JycJ1xuICAgICAgc2VsZi5mYXRoZXIgPSAn5aaI5aaIJ1xuICAgICAgc2VsZi5hdW50ID0gJ+mVv+i+iCdcbiAgICAgIHNlbGYuY29sbGVnZSA9ICflkIzkuosnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IxMSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IyID0gJ3JlZCdcbiAgICAgIHNlbGYuY29sb3IyMiA9ICdyZWQnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuICAiXX0=