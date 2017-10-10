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

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {}, _this.data = {
      a: '../imgas/人头.png',
      b: '../imgas/礼物.png',
      c: '../imgas/对勾.png',
      d: '../imgas/相机.png',
      e: '../imgas/钻戒.png',
      f: '../imgas/手表.png',
      g: '../imgas/眼镜.png',
      h: '../imgas/围巾.png',
      j: '../imgas/钱包.png',
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
        self.d = '../imgas/相机.png';
        self.e = '../imgas/钻戒.png';
        self.f = '../imgas/手表.png';
        self.g = '../imgas/眼镜.png';
        self.h = '../imgas/围巾.png';
        self.j = '../imgas/钱包.png';
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
        self.d = '../imgas/相机.png';
        self.e = '../imgas/钻戒.png';
        self.f = '../imgas/口红.png';
        self.g = '../imgas/鲜花.png';
        self.h = '../imgas/围巾.png';
        self.j = '../imgas/钱包.png';
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJkYXRhIiwiYSIsImIiLCJjIiwiZCIsImUiLCJmIiwiZyIsImgiLCJqIiwibXlzZWxmIiwiaHVzYmFuZCIsInNpc3RlciIsImZhdGhlciIsImF1bnQiLCJjb2xsZWdlIiwiY29sb3IxIiwiY29sb3IxMSIsImNvbG9yMiIsImNvbG9yMjIiLCJtZXRob2RzIiwiaGUiLCJzZWxmIiwic2hlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVMsRSxRQUVUQyxJLEdBQU87QUFDTEMsU0FBRyxpQkFERTtBQUVMQyxTQUFHLGlCQUZFO0FBR0xDLFNBQUcsaUJBSEU7QUFJTEMsU0FBRyxpQkFKRTtBQUtMQyxTQUFHLGlCQUxFO0FBTUxDLFNBQUcsaUJBTkU7QUFPTEMsU0FBRyxpQkFQRTtBQVFMQyxTQUFHLGlCQVJFO0FBU0xDLFNBQUcsaUJBVEU7QUFVTEMsY0FBUSxJQVZIO0FBV0xDLGVBQVMsT0FYSjtBQVlMQyxjQUFRLE9BWkg7QUFhTEMsY0FBUSxJQWJIO0FBY0xDLFlBQU0sSUFkRDtBQWVMQyxlQUFTLElBZko7QUFnQkxDLGNBQVEsS0FoQkg7QUFpQkxDLGVBQVMsS0FqQko7QUFrQkxDLGNBQVEsT0FsQkg7QUFtQkxDLGVBQVM7QUFuQkosSyxRQXFCUEMsTyxHQUFVO0FBQ1JDLFFBRFEsZ0JBQ0g7QUFDSCxZQUFJQyxPQUFPLElBQVg7QUFDQUEsYUFBS2xCLENBQUwsR0FBUyxpQkFBVDtBQUNBa0IsYUFBS2pCLENBQUwsR0FBUyxpQkFBVDtBQUNBaUIsYUFBS2hCLENBQUwsR0FBUyxpQkFBVDtBQUNBZ0IsYUFBS2YsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FlLGFBQUtkLENBQUwsR0FBUyxpQkFBVDtBQUNBYyxhQUFLYixDQUFMLEdBQVMsaUJBQVQ7QUFDQWEsYUFBS1osTUFBTCxHQUFjLElBQWQ7QUFDQVksYUFBS1gsT0FBTCxHQUFlLE9BQWY7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLE9BQWQ7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLElBQWQ7QUFDQVMsYUFBS1IsSUFBTCxHQUFZLElBQVo7QUFDQVEsYUFBS1AsT0FBTCxHQUFlLElBQWY7QUFDQU8sYUFBS04sTUFBTCxHQUFjLEtBQWQ7QUFDQU0sYUFBS0wsT0FBTCxHQUFlLEtBQWY7QUFDQUssYUFBS0osTUFBTCxHQUFjLE9BQWQ7QUFDQUksYUFBS0gsT0FBTCxHQUFlLE9BQWY7QUFDRCxPQW5CTztBQW9CUkksU0FwQlEsaUJBb0JGO0FBQ0osWUFBSUQsT0FBTyxJQUFYO0FBQ0FBLGFBQUtsQixDQUFMLEdBQVMsaUJBQVQ7QUFDQWtCLGFBQUtqQixDQUFMLEdBQVMsaUJBQVQ7QUFDQWlCLGFBQUtoQixDQUFMLEdBQVMsaUJBQVQ7QUFDQWdCLGFBQUtmLENBQUwsR0FBUyxpQkFBVDtBQUNBZSxhQUFLZCxDQUFMLEdBQVMsaUJBQVQ7QUFDQWMsYUFBS2IsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FhLGFBQUtaLE1BQUwsR0FBYyxJQUFkO0FBQ0FZLGFBQUtYLE9BQUwsR0FBZSxPQUFmO0FBQ0FXLGFBQUtWLE1BQUwsR0FBYyxPQUFkO0FBQ0FVLGFBQUtULE1BQUwsR0FBYyxJQUFkO0FBQ0FTLGFBQUtSLElBQUwsR0FBWSxJQUFaO0FBQ0FRLGFBQUtQLE9BQUwsR0FBZSxJQUFmO0FBQ0FPLGFBQUtOLE1BQUwsR0FBYyxPQUFkO0FBQ0FNLGFBQUtMLE9BQUwsR0FBZSxPQUFmO0FBQ0FLLGFBQUtKLE1BQUwsR0FBYyxLQUFkO0FBQ0FJLGFBQUtILE9BQUwsR0FBZSxLQUFmO0FBQ0Q7QUF0Q08sSzs7Ozs7NkJBd0NELENBQUc7Ozs7RUFoRXFCLGVBQUtLLEk7O2tCQUFuQjFCLEsiLCJmaWxlIjoiZ2lmdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gIH1cbiAgZGF0YSA9IHtcbiAgICBhOiAnLi4vaW1nYXMv5Lq65aS0LnBuZycsXG4gICAgYjogJy4uL2ltZ2FzL+ekvOeJqS5wbmcnLFxuICAgIGM6ICcuLi9pbWdhcy/lr7nli74ucG5nJyxcbiAgICBkOiAnLi4vaW1nYXMv55u45py6LnBuZycsXG4gICAgZTogJy4uL2ltZ2FzL+mSu+aIki5wbmcnLFxuICAgIGY6ICcuLi9pbWdhcy/miYvooagucG5nJyxcbiAgICBnOiAnLi4vaW1nYXMv55y86ZWcLnBuZycsXG4gICAgaDogJy4uL2ltZ2FzL+WbtOW3vi5wbmcnLFxuICAgIGo6ICcuLi9pbWdhcy/pkrHljIUucG5nJyxcbiAgICBteXNlbGY6ICfoh6rlt7EnLFxuICAgIGh1c2JhbmQ6ICfogIHlhawv55S356WoJyxcbiAgICBzaXN0ZXI6ICflhYTlvJ8v5Z+65Y+LJyxcbiAgICBmYXRoZXI6ICfniLjniLgnLFxuICAgIGF1bnQ6ICfplb/ovognLFxuICAgIGNvbGxlZ2U6ICflkIzkuosnLFxuICAgIGNvbG9yMTogJ3JlZCcsXG4gICAgY29sb3IxMTogJ3JlZCcsXG4gICAgY29sb3IyOiAnYmxhY2snLFxuICAgIGNvbG9yMjI6ICd3aGl0ZSdcbiAgfVxuICBtZXRob2RzID0ge1xuICAgIGhlKCkge1xuICAgICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgICBzZWxmLmQgPSAnLi4vaW1nYXMv55u45py6LnBuZydcbiAgICAgIHNlbGYuZSA9ICcuLi9pbWdhcy/pkrvmiJIucG5nJ1xuICAgICAgc2VsZi5mID0gJy4uL2ltZ2FzL+aJi+ihqC5wbmcnXG4gICAgICBzZWxmLmcgPSAnLi4vaW1nYXMv55y86ZWcLnBuZydcbiAgICAgIHNlbGYuaCA9ICcuLi9pbWdhcy/lm7Tlt74ucG5nJ1xuICAgICAgc2VsZi5qID0gJy4uL2ltZ2FzL+mSseWMhS5wbmcnXG4gICAgICBzZWxmLm15c2VsZiA9ICfoh6rlt7EnXG4gICAgICBzZWxmLmh1c2JhbmQgPSAn6ICB5YWsL+eUt+elqCdcbiAgICAgIHNlbGYuc2lzdGVyID0gJ+WFhOW8ny/ln7rlj4snXG4gICAgICBzZWxmLmZhdGhlciA9ICfniLjniLgnXG4gICAgICBzZWxmLmF1bnQgPSAn6ZW/6L6IJ1xuICAgICAgc2VsZi5jb2xsZWdlID0gJ+WQjOS6iydcbiAgICAgIHNlbGYuY29sb3IxID0gJ3JlZCdcbiAgICAgIHNlbGYuY29sb3IxMSA9ICdyZWQnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IyMiA9ICd3aGl0ZSdcbiAgICB9LFxuICAgIHNoZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5kID0gJy4uL2ltZ2FzL+ebuOacui5wbmcnXG4gICAgICBzZWxmLmUgPSAnLi4vaW1nYXMv6ZK75oiSLnBuZydcbiAgICAgIHNlbGYuZiA9ICcuLi9pbWdhcy/lj6PnuqIucG5nJ1xuICAgICAgc2VsZi5nID0gJy4uL2ltZ2FzL+mynOiKsS5wbmcnXG4gICAgICBzZWxmLmggPSAnLi4vaW1nYXMv5Zu05be+LnBuZydcbiAgICAgIHNlbGYuaiA9ICcuLi9pbWdhcy/pkrHljIUucG5nJ1xuICAgICAgc2VsZi5teXNlbGYgPSAn6Ieq5bexJ1xuICAgICAgc2VsZi5odXNiYW5kID0gJ+iAgeWphi/lpbPnpagnXG4gICAgICBzZWxmLnNpc3RlciA9ICflp5Dlprkv6Ze66JycJ1xuICAgICAgc2VsZi5mYXRoZXIgPSAn5aaI5aaIJ1xuICAgICAgc2VsZi5hdW50ID0gJ+mVv+i+iCdcbiAgICAgIHNlbGYuY29sbGVnZSA9ICflkIzkuosnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdibGFjaydcbiAgICAgIHNlbGYuY29sb3IxMSA9ICd3aGl0ZSdcbiAgICAgIHNlbGYuY29sb3IyID0gJ3JlZCdcbiAgICAgIHNlbGYuY29sb3IyMiA9ICdyZWQnXG4gICAgfVxuICB9XG4gIG9uTG9hZCgpIHsgfVxufVxuICAiXX0=