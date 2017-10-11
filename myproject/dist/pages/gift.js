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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdpZnQuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiZGF0YSIsImEiLCJiIiwiYyIsImQiLCJlIiwiZiIsImciLCJoIiwiaiIsIm15c2VsZiIsImh1c2JhbmQiLCJzaXN0ZXIiLCJmYXRoZXIiLCJhdW50IiwiY29sbGVnZSIsImNvbG9yMSIsImNvbG9yMTEiLCJjb2xvcjIiLCJjb2xvcjIyIiwibWV0aG9kcyIsImhlIiwic2VsZiIsInNoZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFFcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLEksR0FBTztBQUNMQyxTQUFHLGlCQURFO0FBRUxDLFNBQUcsaUJBRkU7QUFHTEMsU0FBRyxpQkFIRTtBQUlMQyxTQUFHLGlCQUpFO0FBS0xDLFNBQUcsaUJBTEU7QUFNTEMsU0FBRyxpQkFORTtBQU9MQyxTQUFHLGlCQVBFO0FBUUxDLFNBQUcsaUJBUkU7QUFTTEMsU0FBRyxpQkFURTtBQVVMQyxjQUFRLElBVkg7QUFXTEMsZUFBUyxPQVhKO0FBWUxDLGNBQVEsT0FaSDtBQWFMQyxjQUFRLElBYkg7QUFjTEMsWUFBTSxJQWREO0FBZUxDLGVBQVMsSUFmSjtBQWdCTEMsY0FBUSxLQWhCSDtBQWlCTEMsZUFBUyxLQWpCSjtBQWtCTEMsY0FBUSxPQWxCSDtBQW1CTEMsZUFBUztBQW5CSixLLFFBcUJQQyxPLEdBQVU7QUFDUkMsUUFEUSxnQkFDSDtBQUNILFlBQUlDLE9BQU8sSUFBWDtBQUNBQSxhQUFLbEIsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FrQixhQUFLakIsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FpQixhQUFLaEIsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FnQixhQUFLZixDQUFMLEdBQVMsaUJBQVQ7QUFDQWUsYUFBS2QsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FjLGFBQUtiLENBQUwsR0FBUyxpQkFBVDtBQUNBYSxhQUFLWixNQUFMLEdBQWMsSUFBZDtBQUNBWSxhQUFLWCxPQUFMLEdBQWUsT0FBZjtBQUNBVyxhQUFLVixNQUFMLEdBQWMsT0FBZDtBQUNBVSxhQUFLVCxNQUFMLEdBQWMsSUFBZDtBQUNBUyxhQUFLUixJQUFMLEdBQVksSUFBWjtBQUNBUSxhQUFLUCxPQUFMLEdBQWUsSUFBZjtBQUNBTyxhQUFLTixNQUFMLEdBQWMsS0FBZDtBQUNBTSxhQUFLTCxPQUFMLEdBQWUsS0FBZjtBQUNBSyxhQUFLSixNQUFMLEdBQWMsT0FBZDtBQUNBSSxhQUFLSCxPQUFMLEdBQWUsT0FBZjtBQUNELE9BbkJPO0FBb0JSSSxTQXBCUSxpQkFvQkY7QUFDSixZQUFJRCxPQUFPLElBQVg7QUFDQUEsYUFBS2xCLENBQUwsR0FBUyxpQkFBVDtBQUNBa0IsYUFBS2pCLENBQUwsR0FBUyxpQkFBVDtBQUNBaUIsYUFBS2hCLENBQUwsR0FBUyxpQkFBVDtBQUNBZ0IsYUFBS2YsQ0FBTCxHQUFTLGlCQUFUO0FBQ0FlLGFBQUtkLENBQUwsR0FBUyxpQkFBVDtBQUNBYyxhQUFLYixDQUFMLEdBQVMsaUJBQVQ7QUFDQWEsYUFBS1osTUFBTCxHQUFjLElBQWQ7QUFDQVksYUFBS1gsT0FBTCxHQUFlLE9BQWY7QUFDQVcsYUFBS1YsTUFBTCxHQUFjLE9BQWQ7QUFDQVUsYUFBS1QsTUFBTCxHQUFjLElBQWQ7QUFDQVMsYUFBS1IsSUFBTCxHQUFZLElBQVo7QUFDQVEsYUFBS1AsT0FBTCxHQUFlLElBQWY7QUFDQU8sYUFBS04sTUFBTCxHQUFjLE9BQWQ7QUFDQU0sYUFBS0wsT0FBTCxHQUFlLE9BQWY7QUFDQUssYUFBS0osTUFBTCxHQUFjLEtBQWQ7QUFDQUksYUFBS0gsT0FBTCxHQUFlLEtBQWY7QUFDRDtBQXRDTyxLOzs7Ozs2QkF3Q0QsQ0FBRzs7OztFQWpFcUIsZUFBS0ssSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJnaWZ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn56S854mp6K+0J1xuICB9XG4gIGRhdGEgPSB7XG4gICAgYTogJy4uL2ltZ2FzL+S6uuWktC5wbmcnLFxuICAgIGI6ICcuLi9pbWdhcy/npLzniakucG5nJyxcbiAgICBjOiAnLi4vaW1nYXMv5a+55Yu+LnBuZycsXG4gICAgZDogJy4uL2ltZ2FzL+ebuOacui5wbmcnLFxuICAgIGU6ICcuLi9pbWdhcy/pkrvmiJIucG5nJyxcbiAgICBmOiAnLi4vaW1nYXMv5omL6KGoLnBuZycsXG4gICAgZzogJy4uL2ltZ2FzL+ecvOmVnC5wbmcnLFxuICAgIGg6ICcuLi9pbWdhcy/lm7Tlt74ucG5nJyxcbiAgICBqOiAnLi4vaW1nYXMv6ZKx5YyFLnBuZycsXG4gICAgbXlzZWxmOiAn6Ieq5bexJyxcbiAgICBodXNiYW5kOiAn6ICB5YWsL+eUt+elqCcsXG4gICAgc2lzdGVyOiAn5YWE5byfL+WfuuWPiycsXG4gICAgZmF0aGVyOiAn54i454i4JyxcbiAgICBhdW50OiAn6ZW/6L6IJyxcbiAgICBjb2xsZWdlOiAn5ZCM5LqLJyxcbiAgICBjb2xvcjE6ICdyZWQnLFxuICAgIGNvbG9yMTE6ICdyZWQnLFxuICAgIGNvbG9yMjogJ2JsYWNrJyxcbiAgICBjb2xvcjIyOiAnd2hpdGUnXG4gIH1cbiAgbWV0aG9kcyA9IHtcbiAgICBoZSgpIHtcbiAgICAgIGxldCBzZWxmID0gdGhpc1xuICAgICAgc2VsZi5kID0gJy4uL2ltZ2FzL+ebuOacui5wbmcnXG4gICAgICBzZWxmLmUgPSAnLi4vaW1nYXMv6ZK75oiSLnBuZydcbiAgICAgIHNlbGYuZiA9ICcuLi9pbWdhcy/miYvooagucG5nJ1xuICAgICAgc2VsZi5nID0gJy4uL2ltZ2FzL+ecvOmVnC5wbmcnXG4gICAgICBzZWxmLmggPSAnLi4vaW1nYXMv5Zu05be+LnBuZydcbiAgICAgIHNlbGYuaiA9ICcuLi9pbWdhcy/pkrHljIUucG5nJ1xuICAgICAgc2VsZi5teXNlbGYgPSAn6Ieq5bexJ1xuICAgICAgc2VsZi5odXNiYW5kID0gJ+iAgeWFrC/nlLfnpagnXG4gICAgICBzZWxmLnNpc3RlciA9ICflhYTlvJ8v5Z+65Y+LJ1xuICAgICAgc2VsZi5mYXRoZXIgPSAn54i454i4J1xuICAgICAgc2VsZi5hdW50ID0gJ+mVv+i+iCdcbiAgICAgIHNlbGYuY29sbGVnZSA9ICflkIzkuosnXG4gICAgICBzZWxmLmNvbG9yMSA9ICdyZWQnXG4gICAgICBzZWxmLmNvbG9yMTEgPSAncmVkJ1xuICAgICAgc2VsZi5jb2xvcjIgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMjIgPSAnd2hpdGUnXG4gICAgfSxcbiAgICBzaGUoKSB7XG4gICAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICAgIHNlbGYuZCA9ICcuLi9pbWdhcy/nm7jmnLoucG5nJ1xuICAgICAgc2VsZi5lID0gJy4uL2ltZ2FzL+mSu+aIki5wbmcnXG4gICAgICBzZWxmLmYgPSAnLi4vaW1nYXMv5Y+j57qiLnBuZydcbiAgICAgIHNlbGYuZyA9ICcuLi9pbWdhcy/pspzoirEucG5nJ1xuICAgICAgc2VsZi5oID0gJy4uL2ltZ2FzL+WbtOW3vi5wbmcnXG4gICAgICBzZWxmLmogPSAnLi4vaW1nYXMv6ZKx5YyFLnBuZydcbiAgICAgIHNlbGYubXlzZWxmID0gJ+iHquW3sSdcbiAgICAgIHNlbGYuaHVzYmFuZCA9ICfogIHlqYYv5aWz56WoJ1xuICAgICAgc2VsZi5zaXN0ZXIgPSAn5aeQ5aa5L+mXuuicnCdcbiAgICAgIHNlbGYuZmF0aGVyID0gJ+WmiOWmiCdcbiAgICAgIHNlbGYuYXVudCA9ICfplb/ovognXG4gICAgICBzZWxmLmNvbGxlZ2UgPSAn5ZCM5LqLJ1xuICAgICAgc2VsZi5jb2xvcjEgPSAnYmxhY2snXG4gICAgICBzZWxmLmNvbG9yMTEgPSAnd2hpdGUnXG4gICAgICBzZWxmLmNvbG9yMiA9ICdyZWQnXG4gICAgICBzZWxmLmNvbG9yMjIgPSAncmVkJ1xuICAgIH1cbiAgfVxuICBvbkxvYWQoKSB7IH1cbn1cbiAgIl19